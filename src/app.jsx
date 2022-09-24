import eu from './assets/eu.jpg'
import Icon from '@mdi/react'
import { mdiGithub, mdiLinkedin, mdiEmail } from '@mdi/js'

export function App() {

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
        <span className="text-2xl block">Hello!</span>
        <span className="text-lg">
          I like computer graphics, databases and Flutter.
          Professionally, I make mobile and web applications for a dealership company.
          And I occasionally mess with electronics.
          I have been coding for more than 9 years now.
        </span>
      </div>

      <div
        class="col-span-12 md:col-span-3"
        style="--levitate:5; --br:5px; --bg:var(--background-alt); --p:24px;"
      >
        
      </div>
    </div>
  )
}
