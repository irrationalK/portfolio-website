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
                <small>1+ Years</small>
              </article>

              <article className='about__card'>
                <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

            <p>
              Hey! I'm Kevin Lu, a passionate web developer based in Aachen, Germany. Having completed my Master's degree in Computer Science and Mathematics for Teaching from RWTH Aachen, I bring a robust blend of analytical and technical skills to the field of app and web development. <br />
              <br />
              After my graduation, I worked as a Software Developer, engaging in various app and web development projects that have honed my skills and deepened my practical knowledge. Throughout my academic journey and professional career, I've been actively involved in multiple projects, constantly improving my abilities and gaining hands-on experience. With an interest in exploring new technologies and frameworks. <br />
              <br />
              Currently, I work as a computer science teacher, finding great joy in teaching.
            </p>


            <a href={CV} download className='btn'>Download CV</a>
          </div>
      </div>
    </section>
  )
}

export default About