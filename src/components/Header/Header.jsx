import React from 'react'
import { Input } from 'antd';
import './Header.css'
import logo from '../../image/gift-logo.png';
import notification from '../../image/notifications.png'
import friends from '../../image/diversity.png'
import login from '../../image/person.png'


export const Header = () => {
  return (
    <div className='header-component'>
      <header className='header-container'>
        <div className="header-wrapper">
          <div className="logo-container">
            <div className="logo-image"><img src={logo} alt="" /></div>
            <div className="logo-title"><h2>Gift.me</h2></div>
          </div>
          <div className="menu-container">
            <a href="">Главная</a>
            <a href="">О нас</a>
            <a href="">Лента желаний</a>
          </div>
          <div className="search-icons-wrapper">
            <div className="search container">
              <Input placeholder="Поиск" />
            </div>
            <div className="icons-container">
              <div className="icon-item"><img src={notification} alt="" /></div>
              <div className="icon-item"><img src={friends} alt="" /></div>
              <div className="icon-item"><img src={login} alt="" /></div>
            </div>
          </div>
        </div>
      </header>
    </div>

  )
}
