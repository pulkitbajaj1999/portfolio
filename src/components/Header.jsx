import React from 'react'

const details = {
  name: 'Pulkit Bajaj',
  resume:
    'https://drive.google.com/file/d/1te3v2zFhCPp69c3X8w4O92g-T3u-MoSS/view',
  linkedIn: 'https://www.linkedin.com/in/pulkitbajaj/',
  github: 'https://github.com/pulkitbajaj1999/',
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
            Full-Stack Software Engineer with 5+ years of experience specializing in scalable Microservices Architecture and Healthcare SaaS.
            Engineered high-availability systems sustaining 99.9% uptime for 10k+ concurrent providers and 1M+ clinical records, leveraging Node.js, React, Kubernetes, GCP, and large-scale NoSQL databases.<br/>
            Obsessed with performance — delivered 80% system-wide gains through strategic frontend modernization, database indexing, distributed tracing, and elimination of legacy bottlenecks. Proven expertise in Pub/Sub event-driven architecture, GraphQL, RESTful APIs, and automated data onboarding at scale.<br/>
            Passionate about leveraging AI-driven solutions to accelerate development workflows, enhance system intelligence, and deliver smarter, future-ready engineering outcomes.<br/>
            Award-winning engineer recognized for Cybersecurity innovation and consistent technical excellence in high-pressure production environments.
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
              <a className="icon-box" href={details.linkedIn} target="_blank">
                <i className="fab fa-linkedin"></i>
              </a>
              <a className="icon-box" href={details.github} target="_blank">
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
