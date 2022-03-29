import React from 'react'
import './About.css'
import Img from '../../assets/dragon.png'
import {FaAward} from 'react-icons/fa'
import {MdWorkOutline, MdOutlineVerified} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_img">
          <div className="about_img-image">
            <img src={Img} alt="" />
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
              <article className='about_card'>
                <FaAward className='about_icon'/>
                <h5>Qualification</h5>
                <small></small>
              </article>

              <article className='about_card'>
                <MdWorkOutline className='about_icon'/>
                <h5>Experience</h5>
                <small></small>
              </article>

              <article className='about_card'>
                <MdOutlineVerified className='about_icon'/>
                <h5>Certifications</h5>
                <small></small>
              </article>
          </div>

          <p>
          A computer engineering grad with experience in Full Stack web development and keen interest in backend
software engineering.
          </p>

          <a href="#contacts" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About