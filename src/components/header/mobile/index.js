import React from 'react'
import "./mobile.css"
function Mobile({isOpen,setIsOpen}) {
  return (
    <div className='mobile'>
        <div className='close-icon' onClick={()=>setIsOpen(!isOpen)}>
            <i class="fi-rr-cross-circle"></i>
        </div>
        <div className='mobile-options'>
        <div className='mobile-option'>
         <a href='#about'>
         <i class="fi fi-rr-comment"></i>About
         </a>
     </div> 
     <div className='mobile-option'>
         <a href="#project">
         <i class="fi fi-rr-edit-alt"></i>Projects
         </a>
     </div>
     <div className='mobile-option'>
         <a href='#skill'>
         <i class="fi fi-rs-laptop"></i>Skills
         </a>
     </div>
     <div className='mobile-option'>
         <a href='#contact'>
         <i class="fi fi-sr-user option-icon"></i>Contacts 
         </a>
     </div>
        </div>
    </div>
  )
  }

export default Mobile
