import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {HiOutlineCode} from 'react-icons/hi'
import { useState } from 'react'


const Nav = () => {
  const [activNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href='#' onClick={() => setActiveNav('#')} className={ activNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={ activNav === '#about' ? 'active' : ''} ><AiOutlineUser/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={ activNav === '#experience' ? 'active' : ''}><BiBook/></a>
      <a href='#portfolio' onClick={() => setActiveNav('#portfolio')} className={ activNav === '#portfolio' ? 'active' : ''}><HiOutlineCode/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={ activNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Nav