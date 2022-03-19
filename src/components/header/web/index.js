import React from 'react'
import "./web.css"
function Web() {
  return (
    
    <div className='web'>
       <div className='web-option'>
         <a href='#about'>
         <i class="fi fi-rr-comment"></i>About
         </a>
     </div> 
     <div className='web-option'>
         <a href="#project">
         <i class="fi fi-rr-edit-alt"></i>Projects
         </a>
     </div>
     <div className='web-option'>
         <a href='#skill'>
         <i class="fi fi-rs-laptop"></i>Skills
         </a>
     </div>
     <div className='web-option'>
         <a href='#contact'>
         <i class="fi fi-sr-user option-icon"></i>Contacts 
         </a>
     </div>
    </div>
  )
}

export default Web
