import React from 'react'
import PortfolioItems from './PortfolioItems'
import './Portfolio.css'
import Img from '../../assets/one-year-of-react-native.png'

const Portfolio = () => {

  const portfolio_items = {
    1: {
      title:'This is a portfolio item title',
      image: Img,
      gitlink: 'http://github.com'
    }
  }
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <PortfolioItems data = {portfolio_items} />
        <PortfolioItems data = {portfolio_items} />
        <PortfolioItems data = {portfolio_items} />
      </div>
    </section>
  )
}

export default Portfolio