import React, { useState, useEffect } from 'react'
import './header.css'
import HeaderSocials from './HeaderSocials'
import logo from '../../assets/logoGradient.svg'

const Header = () => {
  const greetingText = "Hi, I'm";
  const nameText = "Kevin Lu.";
  const professionTexts = ["M. Ed. Computer Science, RWTH", "Software Engineer", "Web Developer", "App Developer"];
  
  const [textGreeting, setTextGreeting] = useState('');
  const [textName, setTextName] = useState('');
  const [textProfession, setTextProfession] = useState('');
  const [index, setIndex] = useState(0);
  const [professionIndex, setProfessionIndex] = useState(0);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (index < greetingText.length + nameText.length) {
      const timer = setTimeout(() => {
        if (index < greetingText.length) {
          setTextGreeting(prevText => prevText + greetingText[index]);
        } else {
          setTextName(prevText => prevText + nameText[index - greetingText.length]);
        }
        setIndex(prevIndex => prevIndex + 1);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      if (textProfession.length < professionTexts[professionIndex].length) {
        const professionTimer = setTimeout(() => {
          setTextProfession(prevText => prevText + professionTexts[professionIndex][textProfession.length]);
        }, 120);
        return () => clearTimeout(professionTimer);
      } else {
        const changeTextTimer = setTimeout(() => {
          setTextProfession('');
          setProfessionIndex((prevIndex) => (prevIndex + 1) % professionTexts.length);
        }, 3000);
        return () => clearTimeout(changeTextTimer);
      }
    }
  }, [textGreeting, textName, textProfession, index, professionIndex]);

  return (
    <header  id='home'>
        <div className="container header__container">
          <div className='header-text'>
            <h1 className="large-font">{textGreeting}
              {index < greetingText.length && <span>|</span>}
            </h1>
            <h1 className="large-font">{textName}
              {/* Cursor nur anzeigen, wenn der Text noch nicht vollständig ist */}
              {index >= greetingText.length && index < greetingText.length + nameText.length && <span>|</span>}
            </h1>
            <h5 className='text-light medium-font'>{textProfession}
              {index >= greetingText.length + nameText.length && textProfession.length < professionTexts[professionIndex].length && <span>|</span>}
            </h5>

            <div className='cta'>
              <a href='#contact' className='btn'>Get In Contact!</a>
            </div>

            <HeaderSocials />
          </div>
        
          <div className='header-logo'>
            <img src={logo} alt='Logo mit den Initialen K und L' />
          </div>
        
          <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}


export default Header