import React from 'react'
import './Footer.css'
import telegram from '../../image/telegram.png'
import insta from '../../image/instagram.png'
import whatsapp from '../../image/whatsapp.png'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-menu-items">
        <a href="">Главная</a>
        <a href="">О нас</a>
        <a href="">Служба поддержки</a>
        <a href="">Контакты</a>
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