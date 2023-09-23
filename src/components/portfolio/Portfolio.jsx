import React from 'react'
import './portfolio.css'
import flowchart from '../../assets/flowchart.png'
import plane from '../../assets/blow-plane.png'
import portfolio from '../../assets/portfolio.png'
import plantsy from '../../assets/plantsy.png'
import weatherApp from '../../assets/weatherApp.png'

const data = [
  {
    id: 1,
    image: flowchart,
    title: 'Flowchart-Widget',
    description: 'Editor for creating programme flowcharts with translation function into pseudocode and natural language. Created with TypeScript and Lit.',
    github: 'https://github.com/irrationalK',
    demo: 'https://flowchart-lu.netlify.app'
  },
  {
    id: 2,
    image: plantsy,
    title: 'Plantsy',
    description: "Introducing a plant shop website meticulously crafted using React and styled with Tailwind CSS. Experience a seamless blend of botanical beauty and modern web design.",
    github: 'https://github.com/irrationalK/plantsy',
    demo: 'https://plantsy-shop.netlify.app'
  },
  {
    id: 3,
    image: plane,
    title: 'Plane Blower',
    description: 'Make the paper plane fly by blowing. Try to get as far as possible! First App Project with two friends using Swift.',
    github: 'https://github.com/irrationalK/blow-plane',
    demo: 'https://github.com/irrationalK'
  },
  {
    id: 4,
    image: portfolio,
    title: 'Portfolio Website',
    description: "This site represents my first dive into React. It's a showcase of my past coding projects and my React learning journey.",
    github: 'https://github.com/irrationalK/portfolio-website',
    demo: 'https://k-lu.de'
  },
  {
    id: 5,
    image: weatherApp,
    title: 'Weather App',
    description: "Currently, I'm developing a weather app using React Native to familiarize myself with the framework and to improve my Photoshop skills.",
    github: 'https://github.com/irrationalK/weather-app',
    demo: 'https://github.com/irrationalK'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, description, github, demo }) => {
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