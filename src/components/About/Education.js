import React from 'react'
const Education = () => {
  return (
    <>
      <h4 className="stat-title">Education</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <p className="tl-duration">2017 - 2021</p>
          <h5>
            NIT Bhopal<span> &ensp; ( cgpa - 8.25) </span>
          </h5>
          <p>
            Bachelor of Technology - BTech, Computer Science and Engineering
          </p>
        </div>

        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-graduation-cap"></i>
          </div>
          <p className="tl-duration">2015 - 2017</p>
          <h5>
            Shiv Jyoti Sr. Sec. School, Kota <span> &ensp; (89.9% ) </span>
          </h5>
          <p>High School</p>
        </div>
      </div>
    </>
  )
}

export default Education
