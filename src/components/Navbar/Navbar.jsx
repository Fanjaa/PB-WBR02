// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'


const Navbar = () => {

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 20  && window.innerWidth > 1200) {
        header.classList.add('scrolled'); 
        navbar.classList.add('scrolled'); 
      } else {
        header.classList.remove('scrolled'); 
        navbar.classList.remove('scrolled'); 
      }
    };
    
    window.addEventListener('scroll', handleScroll); 
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleMenu = () => {
    setIsMenuActive(prevState => !prevState);
  };

  return (
    <div className="header">
      <div className='navbar'>
        <div className="navbar-logo">
          <img src={assets.logoNew} alt="" />
        </div>
        <div className={`navbar-list ${isMenuActive ? 'active' : ''}`}>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#main">Panitia</a></li>
            <li><a href="#intro">Intro</a></li>
            <li><a href="#tournament">Tournament</a></li>
            <li><a href="#teams">Teams</a></li>
            <li><a href="#stories">Stories</a></li>
            <li><a href="#footer">Footer</a></li>
          </ul>
        </div>
        <div className="booking">
          <p>Booking</p>
        </div>
        <div className="menu-navbar" id='menu-navbar' onClick={handleMenu}>
          <img src={isMenuActive ? assets.closeIcon : assets.menuIcon} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
