import React, { useEffect, useState } from 'react'
const Controls = () => {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight - 10) {
        // At or near bottom of the page
        setActiveSection('contact'); // 👈 change this to your last section's ID
        return
      }

      const sections = ['home', 'about', 'blogs', 'contact'];

      for (let i = 0; i < sections.length; i++) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          const offsetTop = rect.top + window.scrollY;
          const offsetBottom = offsetTop + section.offsetHeight;
  
          if (
            window.scrollY >= offsetTop - 100 &&
            window.scrollY < offsetBottom - 100
          ) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const scrollHandler = (e) => {
    const id = e.currentTarget.dataset.id;
    setActiveSection(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };



  return (
    <div className="controls">
      <div
        className={`control ${activeSection === 'home' ? 'active-btn' : ''}`}
        onClick={scrollHandler}
        data-id="home"
      >
        <i className="fas fa-home"></i>
      </div>
      <div
        className={`control ${activeSection === 'about' ? 'active-btn' : ''}`}
        onClick={scrollHandler}
        data-id="about"
      >
        <i className="fas fa-user"></i>
      </div>
      <div
        className={`control ${activeSection === 'blogs' ? 'active-btn' : ''}`}
        onClick={scrollHandler}
        data-id="blogs"
      >
        <i className="fas fa-briefcase"></i>
      </div>
      <div
        className={`control ${activeSection === 'contact' ? 'active-btn' : ''}`}
        onClick={scrollHandler}
        data-id="contact"
      >
        <i className="fas fa-envelope-open"></i>
      </div>
    </div>

  )
}

export default Controls
