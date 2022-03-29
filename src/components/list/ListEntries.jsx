import React from 'react'
import {BiCheck} from 'react-icons/bi'

const ListEntries = (props) => {
  return (
    <div className="list_content">
        {
            Object.entries(props.data).map(([key, value]) =>
                <article className='list_details'>
                <ul className='list_point'>
                  <li>
                    <BiCheck className='list_check-icon' />
                    <p>{value}</p>
                  </li>
                </ul>
                </article>
            )
        }       
    </div>
  )
}

export default ListEntries