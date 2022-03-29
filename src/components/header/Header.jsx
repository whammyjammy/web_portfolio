import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './Header.css'
import Img from '../../assets/dragon.png'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello</h5>
        <h1>Jay M</h1>
        <h5 className="text-light"> Fullstack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="img">
          <img src={Img} alt="Img" />
        </div>
        <a href="#contacts" className="scroll_down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header