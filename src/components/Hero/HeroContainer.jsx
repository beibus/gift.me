import React from 'react'
import image from '../../image/hero-image.png'
import './HeroContainer.css'

const HeroContainer = () => {
  return (
    <div className='hero-container'>
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Gift.me</h2>
          <h3 className='title-text'>Мы воплощаем в подарках вашу любовь!</h3>
        </div>

        <div className="hero-buttons">
          <div className='button-enter'>
          <button className='enter'>Вход</button>
          </div>

          <div className='button-login'>
          <button className='register'>Регистрация</button>
          </div>
        </div>

      </div>

      <div className="hero-image">
        <img src={image} alt="" />
      </div>
    </div>
  )
}

export default HeroContainer