import React from 'react'
import { Link } from 'react-scroll'
import './Footer.css'
import telegram from '../../image/telegram.png'
import insta from '../../image/instagram.png'
import whatsapp from '../../image/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-menu-items">
        <Link activeClass="active" to="home" spy={true} smooth={true}>Главная</Link>
        <Link to="about-us" spy={true} smooth={true}>О нас</Link>
        <Link to="home" spy={true} smooth={true}>Служба поддержки</Link>
        <Link to="home" spy={true} smooth={true}>Контакты</Link>
      </div>

      <div className="footer-icons">
        <div className="icon-item"><img src={telegram} alt="" /></div>
        <div className="icon-item"><img src={insta} alt="" /></div>
        <div className="icon-item"><img src={whatsapp} alt="" /></div>
      </div>

    </div>
  )
}

export default Footer