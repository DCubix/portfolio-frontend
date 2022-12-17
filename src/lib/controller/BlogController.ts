import posts from '../../assets/blog/posts.txt';

function parseMD(md: string): string {
  let lst = md.split('');
  let pointer = 0;

  let variables: { [key: string]: any[] } = {};

  function peek() {
    return lst[0];
  }

  function scan() {
    pointer++;
    return lst.shift();
  }

  function pullSpaces() {
    while (/\s/g.test(peek())) {
      scan();
    }
  }

  function pullString(stop: RegExp = /\s/g) {
    let ret = '';
    while (!stop.test(peek())) {
      ret += scan();
    }
    return ret;
  }

  function pullQuotes(token: string = '"') {
    if (peek() == token) scan();

    let ret = '';
    while (peek() != token) {
      ret += scan();
    }
    if (peek() == token) scan();
    return ret;
  }

  function replaceRange(input: string, start: number, end: number, replacement: string): string {
    pointer -= end - start;
    return input.substring(0, start) + replacement + input.substring(end);
  }

  let original = md;

  while (peek()) {
    let c = scan();

    if (c == '{') { // variable expression
      let startPtr = pointer-1;
      let varName = pullString(/[\s\}]/g);

      // read value(s)
      if (/\s/g.test(peek())) { // var declaration/assignment
        pullSpaces(); // eat whitespaces
        // read args, currently only quoted strings are supported
        if (peek() == "'" || peek() == '"') {
          let values = [];
          while (true) {
            let val = pullQuotes(peek());
            pullSpaces();
            values.push(val);
            if (peek() == '}') {
              scan();
              break;
            }
          }
          variables[varName] = values;
          original = replaceRange(original, startPtr, pointer, '');
          // console.log(original);
        } else {
          throw "Invalid value.";
        }
      } else { // var placement
        if (variables[varName]) {
          if (peek() == '}') {
            scan();
          }
          original = replaceRange(original, startPtr, pointer, variables[varName].join(''));
        } else {
          throw `Undeclared variable "${varName}".`;
        }
      }
    } else if (c === '`') { // code blocks skip reading
      if (lst[0] == '`' && lst[1] == '`') {
        scan();
        scan();
        pullString(/`/g);
        scan();
        scan();
        scan();
      } else {
        pullString(/`/g);
        if (peek() == '`') scan();
      }
    }
  }
  return original;
}

export default class BlogController {

  public static async fetchList(limit: number = -1): Promise<string[]> {
    let res = await fetch(posts);
    if (res.ok) {
      let txt = await res.text();
      let postsList = txt.split('\n');
      if (limit > 0) {
        postsList = postsList.slice(0, limit);
      }
      return postsList;
    }
    return [];
  }

  public static async fetchSinglePost(name: string): Promise<string> {
    let url = `${posts.substring(0, posts.lastIndexOf('/'))}/${name}.md`;
    let res = await fetch(url);
    if (res.ok) {
      let raw = await res.text();
      return parseMD(raw);
    }
    return '';
  }

}
