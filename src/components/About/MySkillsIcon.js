import React from 'react'
import styles from './mySkills.module.css'

const MySkills = ({ skills }) => {
  return (
    <div className="about-stats">
      <h4 className="stat-title">Skills</h4>
      <div className={styles['skill-logo-cont']}>
        {skills.map((skill, i) => (
          <a rel="skill-logo" key={i}>
            <img
              rel="skill-logo"
              className={styles['skill-logo']}
              src={skill.logo}
              alt={skill.name}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default MySkills
