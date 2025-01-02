// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import ComingSoonFeatures from '../ComingSoonFeatures'
import SmoothScroll from '../SmoothScroll'

const Navbar = () => {
  
  useEffect(() => {
    // Handle Responsive Navbar Scroll 
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

  // Handle Menu
  const [isMenuActive, setIsMenuActive] = useState(false);
  const handleMenu = () => {
    setIsMenuActive(prevState => !prevState);
  };

  // Slider Navlist
  const navbarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuActive(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <div className="header">
      <div className='navbar' ref={navbarRef}>
        <div className="navbar-logo">
          <a href="/"><img src={assets.logoNew} alt="Logo PB WBR 02" /></a>
        </div>
        <div className={`navbar-list ${isMenuActive ? 'active' : ''}`} >
          <ul>
            <li><a onClick={() => SmoothScroll('hero')}>Home</a></li>
            <li><a onClick={() => SmoothScroll('main')}>Panitia</a></li>
            <li><a onClick={() => SmoothScroll('intro')}>Intro</a></li>
            <li><a onClick={() => SmoothScroll('tournament')}>Tournament</a></li>
            <li><a onClick={() => SmoothScroll('teams')}>Teams</a></li>
            <li><a onClick={() => SmoothScroll('stories')}>Stories</a></li>
            <li><a onClick={() => SmoothScroll('footer')}>Footer</a></li>
          </ul>
        </div>
        <div className="booking">
          <button onClick={() => ComingSoonFeatures()}>Booking</button>
        </div>
        <div className="menu-navbar" id='menu-navbar' onClick={handleMenu}>
          <img src={isMenuActive ? assets.closeIcon : assets.menuIcon} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
