import React from 'react'
import './about.css'
import ME from '../../assets/avatar.jpg'
import CV from '../../assets/cv.pdf'
import {MdOutlineSchool} from 'react-icons/md'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
          <div className='about__me'>
            <div className='about__me-image'>
              <img src={ME} alt='Profilbild Kevin Lu' />
            </div>
          </div>

          <div className='about__content'>
            <div className='about__cards'>
              <article className='about__card'>
                <MdOutlineSchool className='about__icon'/>
                <h5>Qualification</h5>
                <small>M. Ed. Computer Science, RWTH</small>
              </article>

              <article className='about__card'>
                <FaAward className='about__icon'/>
                <h5>Experience</h5>
                <small>3+ Years</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>5+ Completed</small>
              </article>
            </div>

            <p>
              Hey! I'm Kevin Lu, a passionate web developer based in Aachen, Germany. Having recently completed my Master's degree in Computer Science and Mathematics for Teaching from RWTH Aachen, I bring a robust blend of analytical and technical skills to the field of web development. <br />
              <br />
              Throughout my academic journey, I've been actively involved in various web development projects, improving my skills and acquiring hands-on experience. With an interest in exploring new technologies and frameworks, i'm currently developing with ReactJS. <br />
              <br />
              Currently, I'm on the lookout for an opportunity as a Web Developer. I aim to further improve my skills, collaborate with a dynamic team, and contribute to real-world projects. 
            </p>

            <a href={CV} download className='btn'>Download CV</a>
          </div>
      </div>
    </section>
  )
}

export default About