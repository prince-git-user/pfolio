import React from 'react'
import "./skill-card.js"
function SkillCard({skills}) {
  return (
    <div className='skill-card'>
        <div className='skill-icon'>{skills.icon}</div>
        <div className='skill-name'>{skills.name}</div>
      
    </div>
  )
}

export default SkillCard
