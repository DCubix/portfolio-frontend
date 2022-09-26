import eu from './assets/eu.jpg'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiEmail, mdiOpenInNew } from '@mdi/js'
import { useState, useEffect } from 'preact/hooks'
import { Skill } from './components/skill';

export function App() {

  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function loadSkills() {
      let res = await fetch('https://dcubix.up.railway.app/skills');
      if (res.ok) {
        let data = await res.json();
        setSkills(data);
      }
    }
    async function loadProjects() {
      let res = await fetch('https://dcubix.up.railway.app/projects');
      if (res.ok) {
        let data = await res.json();
        setProjects(data);
      }
    }

    loadProjects();
    loadSkills();
  }, []);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-4  w-full lg:w-3/5">
      <div
        class="col-span-12"
        style="--levitate:5; --br:5px; --bg:var(--background-alt); --p:24px; --mt:38px; --d:flex; --ai:center;"
      >
        <img src={eu} alt="Diego Lopes" style="--w:100px; --h:100px; --br:120px" />
        <div style="--d:flex; --fd:column; --jc:center; --ml:15px">
          <span className="text-2xl font-bold">Diego Lopes</span>
          <span className="text-lg">Software Developer</span>
          <div class="group">
            <a href="#" style="--mr:8px"><Icon path={mdiGithub} size={1.3} /></a>
            <a href="#" style="--mr:8px"><Icon path={mdiLinkedin} size={1.4} /></a>
            <a href="#"><Icon path={mdiEmail} size={1.4} /></a>
          </div>
        </div>
      </div>

      <div
        class="col-span-12 md:col-span-9"
        style="--levitate:5; --br:5px; --bg:var(--background-alt); --p:24px;"
      >
        <span className="text-3xl block" style="margin-bottom: 12px;">Hello!</span>
        <span className="text-lg">
          I like computer graphics, databases and Flutter.
          Professionally, I make mobile and web applications for a dealership company.
          And I occasionally mess with electronics.
          I have been coding for more than 9 years now.
        </span>
      </div>

      <div
        class="col-span-12 md:col-span-3"
        style="--levitate:5; --br:5px; --bg:var(--background-alt); --p:24px"
      >
        <span className="text-3xl block" style="margin-bottom: 12px;">Skills</span>
        <div style="--d:flex; --fw:wrap">
          {skills.map((sk) => <Skill skill={sk}></Skill>)}
        </div>
      </div>

      <div
        class="col-span-12"
        style="--p:24px; --d:flex; --ai:center;"
      >
        <span className="text-3xl block">My Work</span>
      </div>
      
      {
        projects.map((p) => (<div
          class="col-span-6"
          style="--levitate:5; --br:5px; --bg:var(--background-alt); --p:24px;"
        >
          <span className="text-2xl block" style="margin-bottom: 12px;">{p.title}</span>
          <p>{p.description} <a aria-label="More Info" href={p.url}><Icon aria-roledescription="img" path={mdiOpenInNew} size={1} target="_blank" /> More Info</a></p>
          <div style="--d:flex; --fw:wrap; --cg:12px; --mt:12px">
            {p.images.map((im) => <a href={im} target="_blank">
              <div style={{
                backgroundImage: 'url(' + im + ')',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '160px',
                height: '160px',
                '--br': '6px',
                '--levitate': '5'
              }}></div>
            </a>)}
          </div>
        </div>))
      }
    </div>
  )
}
