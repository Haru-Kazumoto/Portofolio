import React from 'react'
import './style.css'
import LanguageCards from '../../component/language-cards/LanguageCard'

const Skills = () => {
  return (
    <div className="skills-container" id='skills-page'>
      <div className="skills-container2">
        <div className="title-skills">
            <h2>What I mastered in</h2>
            <div className="divide-skills" /> 
        </div>
        <LanguageCards />
      </div>
    </div>
  )
}

export default Skills
