import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer">
            <BsLinkedin />
        </a>
        <a href="http://github.com" target="_blank" rel="noopener noreferrer">
            <BsGithub />
        </a>
    </div>
  )
}

export default HeaderSocials