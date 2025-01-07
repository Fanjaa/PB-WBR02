// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import SmoothScroll from '../SmoothScroll'
import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';

const Navbar = ({openModal}) => {

  const location = useLocation();
  
  useEffect(() => {
    // Handle Responsive Navbar Scroll 
    const handleScroll = () => {
      const header = document.querySelector('.header');
      const navbar = document.querySelector('.navbar');

      if (window.scrollY > 20  && window.innerWidth > 1024) {
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
          {location.pathname === '/' ? (
            <a href='#hero' onClick={(e) => SmoothScroll(e, 'hero')}><img src={assets.logoNew} alt="Logo PB WBR 02" /></a>
          ):(
            <a href="/"><img src={assets.logoNew} alt="Logo PB WBR 02" /></a>
          )}
        </div>
        <div className={`navbar-list ${isMenuActive ? 'active' : ''}`} >
          <ul>
            {location.pathname === '/' ? (
              <>
              <li><a href='#hero' onClick={(e) => SmoothScroll(e, 'hero')}>Beranda</a></li>
              <li><a href='#main' onClick={(e) => SmoothScroll(e, 'main')}>Panitia</a></li>
              <li><a href='#intro' onClick={(e) => SmoothScroll(e, 'intro')}>Dokumentasi</a></li>
              <li><a href='#tournament' onClick={(e) => SmoothScroll(e, 'tournament')}>Artikel</a></li>
              <li><a href='#teams' onClick={(e) => SmoothScroll(e, 'teams')}>Tim</a></li>
              <li><a href='#stories' onClick={(e) => SmoothScroll(e, 'stories')}>Cerita</a></li>
              <li><a href='#about' onClick={(e) => SmoothScroll(e, 'about')}>Informasi</a></li>                
              </>
            ) : (
              <>
              <li><a href='/'>Beranda</a></li>
              <li><a href='#articles' onClick={(e) => SmoothScroll(e, 'articles')}>Artikel</a></li>
              <li><a href='#about' onClick={(e) => SmoothScroll(e, 'about')}>Informasi</a></li>  
              </>
            )}
          </ul>
        </div>
        <div className="booking">
          <button onClick={() => openModal("Nantikan Turnamen Berikutnya")}>Daftar</button>
        </div>
        <div className="menu-navbar" id='menu-navbar' onClick={handleMenu}>
          <img src={isMenuActive ? assets.closeIcon : assets.menuIcon} alt='Hamburger Menu' />
        </div>
      </div>
    </div>
  )
}

Navbar.propTypes = {
  openModal: PropTypes.func.isRequired,
};


export default Navbar
