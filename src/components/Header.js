import React from 'react'

const details = {
  name: 'Pulkit Bajaj',
  resume:
    'https://drive.google.com/file/d/1zhKcygsopiKbfWyXYvhKi5QG_vTUoEPE/view?usp=sharing',
  linkedIn: 'https://www.linkedin.com/in/pulkitbajaj/',
  github: 'https://github.com/pulkitbajaj1999',
}

const Header = () => {
  return (
    <header className="container header active" id="home">
      <div className="header-content">
        <div className="left-header">
          <div className="h-shape"></div>
          <div className="image">
            <img src="img/pulkit_bajaj.jpg" alt="" />
          </div>
        </div>
        <div className="right-header">
          <h1 className="name">
            Hi, I'm <span>{details.name}.</span>
          </h1>
          <p>
            I'm a Web Developer, I love to create beautiful and functional
            websites.
          </p>
          <div className="btn-con">
            <a href={details.resume} target="_blank" className="main-btn">
              <span className="btn-text">Resume</span>
              <span className="btn-icon">
                <i className="fas fa-download"></i>
              </span>
            </a>
          </div>

          <div className="contact-content-con">
            <div className="contact-icon">
              <a href={details.linkedIn} target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href={details.github} target="_blank">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
