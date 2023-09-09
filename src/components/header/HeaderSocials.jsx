import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href='https://www.linkedin.com/in/kevin-lu-profil/' target='_blank'><BsLinkedin/></a>
      <a href='https://github.com/irrationalK' target='_blank'><FaGithub/></a>
      <a href='https://instagram.com/lu.kev?igshid=NGVhN2U2NjQ0Yg==' target='_blank'><BsInstagram/></a>
    </div>
  )
}

export default HeaderSocials