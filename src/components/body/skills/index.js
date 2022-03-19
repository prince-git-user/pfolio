import React from 'react'
import { SkillsData } from '../../../data/skills'
import Seprator from '../../common/seprator/index'
import SkillCard from './skill-card'
import "./skills.css"
function Skills() {
  const data=SkillsData
  return (
    <div className='skills'>
     <Seprator/>
     <label className='section-title'>Skills</label>
     <div className='skills-container'>
       {data.map((item)=>{
         return (
           <div className='skills-section'>
             <label className='skills-section-title'>{item.type}</label> 
             <div className='skills-list'>
               {item.list.map((skills)=>{
                 return (
                   <SkillCard skills={skills}/>
                 )

                 
               })}
               </div>
               </div>
         )
         
       })}
     </div>
    </div>
  )
}

export default Skills
