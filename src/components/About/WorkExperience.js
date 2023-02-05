import React from 'react'
const WorkExperience = () => {
  return (
    <>
      <h4 className="stat-title">Work Experience</h4>
      <div className="timeline">
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">July 2021 - present</p>
          <h5>
            Software Engineer<span> - Incedo</span>
          </h5>
          <ul>
            <li>
              <strong>Incedo Cricket League: </strong>It is a website which is
              used to manage auction of different teams in real time and
              provides overview of players, teams, accounts. Backend is written
              with node and frontend uses React. MongoDb is used for database.
              It uses socket.io for real time bidding process.
            </li>
            <li>
              <strong>Tripwire Connect: </strong>Tripwire Connect is a splunk
              based product which is used in analysis and is available as
              onpremise as well as saas. I worked with technologies like
              javascript, html, css for onprem side and React for saas side.
            </li>
            <li>
              <strong>Developed Export-to-pdf: </strong>Requirement was to
              create a common library to parse different types of connect
              reports and export to a pdf. Successfully delivered the epic
              meeting all the requirements and within the given time.
            </li>

            <li>
              <strong>MAD Award: </strong>Received Made A Difference Difference
              award for my contribution in solving client requirements
            </li>
          </ul>
        </div>
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">Jan 2021 - July 2021</p>
          <h5>
            Software Engineer Intern<span> - Incedo</span>
          </h5>
          <ul>
            <li>
              <strong>Incedo Recruitment Portal: </strong> It is a webapp which
              manages the recruitment process easily and effectively. It
              supports management of job description and requisition IDs,
              candidates, interview rounds, resume parsing. It uses
              python-django as backend and fronend uses django-templating.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default WorkExperience
