import React from 'react'
const MySkills = ({ skills }) => {
  return (
    <div className="about-stats">
      <h4 className="stat-title">Skills</h4>
      <div className="progress-bars">
        {skills.map((skill) => (
          <div className="progress-bar">
            <p className="prog-title">{skill.name}</p>
            <div className="progress-con">
              <p className="prog-text">{skill.rating}</p>
              <div className="progress">
                <span className="html"></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MySkills
