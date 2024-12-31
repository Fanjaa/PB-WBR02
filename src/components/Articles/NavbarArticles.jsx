// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import '../Navbar/Navbar'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'


const NavbarArticles = () => {

  const navigate = useNavigate();
  
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

  // Handle Scroll to Section
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="header">
      <div className='navbar'>
        <div className="navbar-logo">
          <img src={assets.logoNew} alt="" />
        </div>
        <div className={`navbar-list ${isMenuActive ? 'active' : ''}`}>
          <ul>
            <li><a onClick={() => navigate('../')}>Home</a></li>
            <li><a onClick={() => scrollToSection('articles')}>Article</a></li>
            <li><a onClick={() => scrollToSection('footer')}>Footer</a></li>
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

export default NavbarArticles
