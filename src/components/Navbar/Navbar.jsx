// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import ComingSoonFeatures from '../ComingSoonFeatures'
import SmoothScroll from '../SmoothScroll'
import { useLocation, useNavigate } from 'react-router-dom'

const Navbar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  
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
            <a onClick={() => SmoothScroll('hero')}><img src={assets.logoNew} alt="Logo PB WBR 02" /></a>
          ):(
            <a href="/"><img src={assets.logoNew} alt="Logo PB WBR 02" /></a>
          )}
        </div>
        <div className={`navbar-list ${isMenuActive ? 'active' : ''}`} >
          <ul>
            {location.pathname === '/' ? (
              <>
              <li><a onClick={() => SmoothScroll('hero')}>Beranda</a></li>
              <li><a onClick={() => SmoothScroll('main')}>Panitia</a></li>
              <li><a onClick={() => SmoothScroll('intro')}>Dokumentasi</a></li>
              <li><a onClick={() => SmoothScroll('tournament')}>Artikel</a></li>
              <li><a onClick={() => SmoothScroll('teams')}>Tim</a></li>
              <li><a onClick={() => SmoothScroll('stories')}>Cerita</a></li>
              <li><a onClick={() => SmoothScroll('footer')}>Informasi</a></li>                
              </>
            ) : (
              <>
              <li><a onClick={() => navigate('/')}>Beranda</a></li>
              <li><a onClick={() => SmoothScroll('articles')}>Artikel</a></li>
              <li><a onClick={() => SmoothScroll('footer')}>Informasi</a></li>  
              </>
            )}
          </ul>
        </div>
        <div className="booking">
          <button onClick={() => ComingSoonFeatures()}>Daftar</button>
        </div>
        <div className="menu-navbar" id='menu-navbar' onClick={handleMenu}>
          <img src={isMenuActive ? assets.closeIcon : assets.menuIcon} />
        </div>
      </div>
    </div>
  )
}

export default Navbar
