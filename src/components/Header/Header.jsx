import React from 'react'
import { Link } from 'react-scroll'
import './Header.css'
import logo from '../../image/gift-logo.png';
import notification from '../../image/notifications.png'
import friends from '../../image/diversity.png'
import login from '../../image/person.png'
import search from '../../image/search.png'


const Header = () => {
  return (
    <div className='header-component' id='home'>
      <header className='header-container'>
        <div className="header-wrapper">
          <div className="logo-container">
            <div className="logo-image"><img src={logo} alt="" /></div>
            <div className="logo-title"><h2>Gift.me</h2></div>
          </div>
          <div className="menu-container">
            <Link activeClass="active" to="home" spy={true} smooth={true}>Главная</Link>
            <Link to="about-us" spy={true} smooth={true}>О нас</Link>
            <Link to="wishlist" spy={true} smooth={true}>Лента желаний</Link>
          </div>
          <div className="search-icons-wrapper">
            <div className="search-container">
              <div className='icon-wrapper'>
                <img className='search-icon' src={search} alt="" />
              </div>
              <div>
                <input type="text" placeholder='Поиск' />
              </div>
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

export default Header
