import React from 'react'
import './List.css'
import ListEntries from './ListEntries'

const List = () => {
  const language_list = {
    'HTML': 'Proficient',
    'JavaScript': 'Proficient',
    'CSS': 'Proficient',
    'Python': 'Proficeient',
    'SQL': 'Proficeient',
    'C#': 'Familiar'
  }

  return (
    <section id='list'>
      <h5>Whom I have Worked With</h5>
      <h2>My List</h2>
      <div className="container list_container">
        <article className="list_group">
          <div className="list_head">
            <h3>Softwre Enginer Intern</h3>
          </div>
          <ListEntries data = {language_list}/>
        </article>

        <article className="list_group">
          <div className="list_head">
            <h3>Softwre Enginer Intern</h3>
          </div>
          <ListEntries data = {language_list}/>
        </article>
        
        <article className="list_group">
          <div className="list_head">
            <h3>Softwre Enginer Intern</h3>
          </div>
          <ListEntries data = {language_list}/>
        </article>
      </div>

    </section>
  )
}

export default List