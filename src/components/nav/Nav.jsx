import React from 'react'
import {AiOutlineHome, AiOutlineUser, AiOutlineMessage, AiOutlineBarChart} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import { useState } from 'react'
import './Nav.css'

const Nav = () => {

  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="# " onClick={()=>setActiveNav('#')} className={activeNav === '#' ? 'active':''}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active':''}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={()=>setActiveNav('#experience')} className={activeNav === '#experience' ? 'active':''}>
        <BiBookAlt />
      </a>
      <a href="#skill" onClick={()=>setActiveNav('#skill')} className={activeNav === '#skill' ? 'active':''}>
        <AiOutlineBarChart />
      </a>
      <a href="#contacts" onClick={()=>setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active':''}>
        <AiOutlineMessage />
      </a>
    </nav>
  )
}

export default Nav