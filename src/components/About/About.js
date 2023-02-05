import React from 'react'
import MySkills from './MySkillsIcon'

import AngularLogo from '../../assets/img/skills/angular.png'
import CssLogo from '../../assets/img/skills/css.png'
import HtmlLogo from '../../assets/img/skills/html.png'
import JavascriptLogo from '../../assets/img/skills/javascript.png'
import TypescriptLogo from '../../assets/img/skills/typescript.svg'
import ReactLogo from '../../assets/img/skills/react.png'
import NodeLogo from '../../assets/img/skills/node.png'
import MongodbLogo from '../../assets/img/skills/mongodb.png'
import GitLogo from '../../assets/img/skills/git.png'
import RxjsLogo from '../../assets/img/skills/rxjs.png'
import Information from './Information'
import Education from './Education'
import WorkExperience from './WorkExperience'

const skillStats = [
  { name: 'HTML', rating: '8', logo: HtmlLogo },
  { name: 'CSS', rating: '8', logo: CssLogo },
  { name: 'Javascript', rating: '9', logo: JavascriptLogo },
  { name: 'Typescript', rating: '7', logo: TypescriptLogo },
  { name: 'React', rating: '9', logo: ReactLogo },
  { name: 'Node', rating: '9', logo: NodeLogo },
  { name: 'MongoDB', rating: '8', logo: MongodbLogo },
  { name: 'Git', rating: '8', logo: GitLogo },
]

const About = () => {
  return (
    <section className="container about" id="about">
      <div className="main-title">
        <h2>
          About <span>me</span>
          <span className="bg-text">About</span>
        </h2>
      </div>
      {/* <Information /> */}
      <WorkExperience />
      <Education />

      <MySkills skills={skillStats} />
    </section>
  )
}

export default About
