import React from 'react'
import LowerImage from '../../image/LowerImage.png'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <h1 className='about-main-title'>О НАС</h1>
        <div className="about-container">
            <div className="about-leftside">
                <div className="about-leftside-title">
                    <p>Помогаем дарить подарки своим близким!</p>
                </div>
                <div className="about-leftside-text">
                Получайте подарки правильно. Сервис GIFT ME вам в этом поможет. Вы можете создавать и просматривать списки желаний. Дарить и получать подарки от друзей<div className=""></div>
                </div>
            </div>
            <div className="about-rightside-images">
                <img src={LowerImage} alt="" />
                
            </div>
        </div>
    </div>
  )
}

export default About