import React from 'react'
import './portfolio.css'
import flowchart from '../../assets/flowchart.png'
import plane from '../../assets/blow-plane.png'
import portfolio from '../../assets/portfolio.png'

const data = [
  {
    id: 1,
    image: flowchart,
    title: 'Flowchart-Widget',
    description: 'Editor for creating programme flowcharts with translation function into pseudocode and natural language.\n' + 'Created with TypeScript and Lit.',
    github: 'https://github.com/irrationalK',
    demo: 'https://flowchart-lu.netlify.app'
  },
  {
    id: 2,
    image: plane,
    title: 'Plane Blower',
    description: 'Make the paper plane fly by blowing. Try to get as far as possible! First App Project with two friends using Swift.',
    github: 'https://github.com/irrationalK',
    demo: 'https://github.com/irrationalK'
  },
  {
    id: 3,
    image: portfolio,
    title: 'Portfolio Website',
    description: "This site represents my first dive into React. It's both a showcase of my past coding projects and a testament to my React learning journey.",
    github: 'https://github.com/irrationalK/portfolio-website',
    demo: 'https://k-lu.de'
  }
]

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
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