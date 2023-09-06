import React from 'react'
import './portfolio.css'
import flowchart from '../../assets/flowchart.png'
import plane from '../../assets/blow-plane.png'

const data = [
  {
    id: 1,
    image: flowchart,
    title: 'Flowchart-Widget with translation function',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: plane,
    title: 'Plane Blower - Swift App',
    github: 'https://github.com',
    demo: 'https://github.com'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
       {
        data.map(({id, image, title, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} target='_blank' className='btn'>Github</a>
              <a href={demo} target='_blank' className='btn btn-primary'>Live Demo</a>
            </div>
          </article>
          )
        })
       }
      </div>
    </section>
  )
}

export default Portfolio