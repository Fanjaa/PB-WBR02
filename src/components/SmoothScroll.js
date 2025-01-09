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
