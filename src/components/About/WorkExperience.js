import React from 'react'

const WorkExperience = () => {
  return (
    <>
      <h4 className="stat-title">Work Experience</h4>
      <div className="timeline">
        {/* MRO Corp */}
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">August 2023 - Present</p>
          <h5>
            Fullstack Developer<span> - MRO Corp</span>
          </h5>
          <ul>
            <li>
              <strong>Healthcare Web Applications: </strong> Developed and maintained scalable web applications using React, Node.js, Express, Cassandra, BigQuery, Postgres, and MongoDB within a microservices architecture.
            </li>
            <li>
              <strong>Agile Development: </strong> Delivered features in Agile sprints with high quality—performing code reviews, writing unit tests, and managing vulnerabilities.
            </li>
            <li>
              <strong>Team Collaboration: </strong> Collaborated with an 8–9 person team, contributed to POCs, and mentored junior developers.
            </li>
            <li>
              <strong>Performance Optimization: </strong> Optimized application performance by up to 70%, ensuring scalability to handle large data volumes and user base.
            </li>
            <li>
              <strong>Production Support: </strong> Handled production issues with minimal downtime using GCP logging and Kubernetes.
            </li>
          </ul>
        </div>

        {/* Incedo - Full Time */}
        <div className="timeline-item">
          <div className="tl-icon">
            <i className="fas fa-briefcase"></i>
          </div>
          <p className="tl-duration">July 2021 - August 2023</p>
          <h5>
            Software Engineer<span> - Incedo</span>
          </h5>
          <ul>
            <li>
              <strong>Incedo Cricket League: </strong> Developed a web app for real-time cricket auctions using React, Node, Express, and MongoDB. Implemented real-time bidding using Socket.io.
            </li>
            <li>
              <strong>SAAS Applications: </strong> Worked on React and Splunk-based SAAS applications, using JavaScript, Django, Python, and Docker for backend and on-premise environments.
            </li>
            <li>
              <strong>Export-to-PDF Library: </strong> Built a reusable JavaScript PDF export library for Splunk-based security reports, improving report generation and client engagement.
            </li>
            <li>
              <strong>MAD Award: </strong> Received "Made A Difference" award for high-impact contributions in a short time span.
            </li>
          </ul>
        </div>

        {/* Incedo - Internship */}
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
              <strong>Incedo Recruitment Portal: </strong> Built a recruitment platform using Python-Django and vanilla JavaScript with SQLite, enabling efficient job management and resume parsing.
            </li>
            <li>
              <strong>DevOps Support: </strong> Assisted in maintaining virtual servers (Windows Server, CentOS, Debian) using Linux scripting and GitHub for code reviews.
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default WorkExperience
