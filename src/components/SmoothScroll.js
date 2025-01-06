// eslint-disable-next-line no-unused-vars
import React from 'react'

  // Handle Scroll to Section
  const SmoothScroll = (e, id) => {
    if (e) {
      e.preventDefault(); 
    }
    
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default SmoothScroll
