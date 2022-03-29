import React from 'react'
import './Skills.css'
import Entries from './Entries'

const Skills = () => {
  const language_list = {
    'HTML': 'Proficient',
    'JavaScript': 'Proficient',
    'CSS': 'Proficient',
    'Python': 'Proficeient',
    'SQL': 'Proficeient',
    'C#': 'Familiar'
  }
  const technology_list = {
    'React': 'Proficient',
    'Django': 'Proficient',
    'NextJS': 'Proficeient',
    'MySQL': 'Proficient',
    'Git': 'Proficeient',
    'Bash': 'Proficeient',
    'REST API': 'Proficeient',
    '.Net': 'Familiar'
  }


  return (
    <section id='skills'>
      <h5>What I Can Do</h5>
      <h2>My Skills</h2>

      <div className="container skills_container">
        <div className="skills_card1">
          <h3>Languages</h3>
          <Entries data = {language_list}/>
        </div>
        <div className="skills_card2">
          <h3>Technologies</h3>
          <Entries data ={technology_list} />
        </div>
      </div>
    </section>
  )
}

export default Skills