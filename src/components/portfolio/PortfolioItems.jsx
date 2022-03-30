import React from 'react'

const PortfolioItems = (props) => {
  return (
    <div className="portfolio_content">
        {
            Object.entries(props.data).map(([key, value]) =>
              <article className="portfolio_item">
                <div className="portfolio_image-item">
                  <img src={value.image} alt="" />
                </div>
                <h3>{value.title}</h3>
                <div className="portfolio_item-cta">
                  <a href={value.gitlink} className='btn' target='_blank' rel="noopener noreferrer">Github</a>
                  {/* <a href="http://dribble.com" className='btn btn-primary' target='_blank' rel="noopener noreferrer">Live Demo</a> */}
                  </div>
              </article>
            )
        }       
    </div>
  )
}

export default PortfolioItems