import React from 'react'
import {MdOutlineStar, MdOutlineStarOutline} from 'react-icons/md'

const Entries = (props) => {
  const SetIcon = (value) => {
    if (value === 'Familiar'){
      return (<MdOutlineStarOutline className='skills_details-icon'/>)
    }
    return (<MdOutlineStar className='skills_details-icon'/>)
  }
  return (
    <div className="skills_content">
        {
            Object.entries(props.data).map(([key, value]) =>
                <article className='skills_details'>
                {SetIcon(value)}
                <div>
                  <h4>{key}</h4>
                  <small className='text-light'>{value}</small>
                </div>
                </article>
            )
        }       
    </div>
  )
}

export default Entries