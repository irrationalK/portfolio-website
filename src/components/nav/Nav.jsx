import React, { useState, useEffect } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {HiOutlineCode} from 'react-icons/hi'


const Nav = () => {
  const [activNav, setActiveNav] = useState('#');

  useEffect(() => {
    const sections = ['#home', '#about', '#experience', '#portfolio', '#contact'];

    const handleScroll = () => {
      let currentSection = '';

      sections.forEach((sectionId) => {
        const element = document.querySelector(sectionId);
        const rect = element.getBoundingClientRect();
        
        // Checkt ob der obere Rand der Sektion im Viewport ist
        if (rect.top <= 5 && rect.bottom >= 0) {
          currentSection = sectionId;
        }
      });

      setActiveNav(currentSection);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav>
      <a href='#home' className={activNav === '#home' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' className={activNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
      <a href='#experience' className={activNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' className={activNav === '#portfolio' ? 'active' : ''}><HiOutlineCode/></a>
      <a href='#contact' className={activNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav