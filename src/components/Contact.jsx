import React from 'react'

const details = {
  location: 'Sawai Madhopur, Rajasthan',
  email: 'pulkitbajaj1999@gmail.com',
  mobile: '9079940527',
  languages: 'English, Hindi',
  linkedIn: 'https://www.linkedin.com/in/pulkitbajaj/',
  github: 'https://github.com/pulkitbajaj1999',
}

const Contact = () => {
  return (
    <section className="container contact" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>
            Contact <span>Me</span>
            <span className="bg-text">Contact</span>
          </h2>
        </div>
        <div className="contact-content-con">
          <div className="left-contact">
            <h4>Contact Details</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-map-marker-alt"></i>
                  <span>Location</span>
                </div>
                <p>{details.location}</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-envelope"></i>
                  <span>Email</span>
                </div>
                <p>
                  <span>{details.email} </span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-mobile"></i>
                  <span>Mobile Number</span>
                </div>
                <p>
                  <span>{details.mobile} </span>
                </p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <i className="fas fa-globe-asia"></i>
                  <span>Languages</span>
                </div>
                <p>
                  <span>{details.languages} </span>
                </p>
              </div>
            </div>
            <div className="contact-icons">
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
          {/* <div className="right-contact">
            <form action="" className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" required placeholder="YOUR NAME" />
                <input type="email" required placeholder="YOUR EMAIL" />
              </div>
              <div className="input-control">
                <input type="text" required placeholder="ENTER SUBJECT" />
              </div>
              <div className="input-control">
                <textarea
                  name=""
                  id=""
                  cols="15"
                  rows="8"
                  placeholder="Message Here..."
                ></textarea>
              </div>
              <div className="submit-btn">
                <a href="#" className="main-btn">
                  <span className="btn-text">Download CV</span>
                  <span className="btn-icon">
                    <i className="fas fa-download"></i>
                  </span>
                </a>
              </div>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Contact
