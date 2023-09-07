import React from 'react'
import './portfolio.css'
import flowchart from '../../assets/flowchart.png'
import plane from '../../assets/blow-plane.png'

const data = [
  {
    id: 1,
    image: flowchart,
    title: 'Flowchart-Widget',
    description: 'Editor for creating programme flowcharts with translation function into pseudocode and natural language.\n' + 'Created with TypeScript and Lit.',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 2,
    image: plane,
    title: 'Plane Blower',
    description: 'Make the paper plane fly by blowing. Try to get as far as possible!',
    github: 'https://github.com',
    demo: 'https://github.com'
  },
  {
    id: 3,
    image: flowchart,
    title: 'Portfolio Website',
    description: 'Show my work',
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
        data.map(({id, image, title, description, github, demo}) => {
          return (
            <article key={id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <h4>{description}</h4>
            <div className="portfolio__item-cta">
              <a href={github} target='_blank' className='btn'>Github</a>
              <a href={demo} target='_blank' className='btn'>Live Demo</a>
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