import React from 'react'
import SocialContact from '../../common/social-contacts'
import "./about.css"
function About() {
  return (
    <div className='about'>
      <div className='about-top'>
          <div className='about-info'>
              Hello There ✋,I am <br/><span className='info-name'>Prince Kumar</span>.
              <br/>I love Experimenting with the Web.
              <div>Learner || full stack web developer</div>
          </div>
          <div className='about-photo'>
              <img src={require("../../../assets/profile.jpeg")} className="picture"  />
          </div>
      </div>
      <SocialContact/>
    </div>
  )
}

export default About

