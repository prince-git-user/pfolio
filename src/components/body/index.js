import React from 'react'
import About from './about';
import './body.css';
import Contacts from './contacts';
import Projects from './projects';
import Skills from './skills';
import Work from './work';
function Body() {
  return (
    <div className='body'>
     <section id='about'>
        <About/>
     </section>
     <section id='project'>
        <Projects/>
     </section>
     <section id='skill'>
         <Skills/>
     </section>
      {/* <section id='work'>
            <Work/>
     </section>  */}
     <section id='contact'>
   <Contacts/>
     </section>
    </div>
  )
}

export default Body
