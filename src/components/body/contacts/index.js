import React from 'react'
import Seprator from '../../common/seprator';
import SocialContact from '../../common/social-contacts'
import "./contact.css"
function Contacts() {
  return (
    <div className='contact'>
     <Seprator/>
     <label className='section-title'>Contacts</label>
     <div className='contact-container'>
       <div className='contact-left'>
         <p>Want to get in Touch?contact me on any platform </p>
         <SocialContact/>
       </div>
       <div className='download'>
         <a download href={require("../../../assets/resume.pdf")}>
           <i class="fi-rr-cloud-download download-icon" />
           Download Resume
         </a>
       </div>
     </div>

    </div>
  )
}

export default Contacts
