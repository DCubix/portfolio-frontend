<script>
  import { HighlightAuto } from 'svelte-highlight';
  import scheme from 'svelte-highlight/styles/github-dark';

  export let lang
  export let text
</script>

<svelte:head>
  {@html scheme}
</svelte:head>

<HighlightAuto code={text} lang={lang} />
