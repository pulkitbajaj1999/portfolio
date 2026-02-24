import React from 'react'
import MySkills from './MySkillsIcon'

// import Information from './Information'
import Education from './Education'
import WorkExperience from './WorkExperience'

import CssLogo from '../../assets/img/skills/CSS3.svg'
import HtmlLogo from '../../assets/img/skills/HTML5.svg'
import DockerLogo from '../../assets/img/skills/Docker.svg'
import ElectronLogo from '../../assets/img/skills/Electron.svg'
import ExpressLogo from '../../assets/img/skills/Express.svg'
import GitLogo from '../../assets/img/skills/Git.svg'
// import GithubLogo from '../../assets/img/skills/GitHub.svg'
import GraphqlLogo from '../../assets/img/skills/GraphQL.svg'
import JavascriptLogo from '../../assets/img/skills/JavaScript.svg'
import JenkinsLogo from '../../assets/img/skills/Jenkins.svg'
import KubernetesLogo from '../../assets/img/skills/Kubernetes.svg'
import LinuxLogo from '../../assets/img/skills/Linux.svg'
import MongodbLogo from '../../assets/img/skills/MongoDB.svg'
import NodejsLogo from '../../assets/img/skills/Node.js.svg'
import PostgresLogo from '../../assets/img/skills/PostgresSQL.svg'
import PythonLogo from '../../assets/img/skills/Python.svg'
import ReactLogo from '../../assets/img/skills/React.svg'
import SqlLogo from '../../assets/img/skills/SQL-Developer.svg'
import TypescriptLogo from '../../assets/img/skills/TypeScript.svg'
import ViteLogo from '../../assets/img/skills/Vite.js.svg'

const skillStats = [
  { name: 'CSS3', rating: '8', logo: CssLogo },
  { name: 'HTML5', rating: '8', logo: HtmlLogo },
  { name: 'JavaScript', rating: '9', logo: JavascriptLogo },
  { name: 'TypeScript', rating: '8', logo: TypescriptLogo },
  { name: 'React', rating: '9', logo: ReactLogo },
  { name: 'Node.js', rating: '8', logo: NodejsLogo },
  { name: 'Express', rating: '8', logo: ExpressLogo },
  { name: 'Electron', rating: '6', logo: ElectronLogo },
  { name: 'Vite.js', rating: '7', logo: ViteLogo },
  { name: 'GraphQL', rating: '7', logo: GraphqlLogo },
  { name: 'MongoDB', rating: '8', logo: MongodbLogo },
  { name: 'PostgreSQL', rating: '7', logo: PostgresLogo },
  { name: 'SQL', rating: '7', logo: SqlLogo },
  { name: 'Python', rating: '8', logo: PythonLogo },
  { name: 'Docker', rating: '7', logo: DockerLogo },
  { name: 'Kubernetes', rating: '7', logo: KubernetesLogo },
  // { name: 'GitHub', rating: '8', logo: GithubLogo },
  { name: 'Jenkins', rating: '6', logo: JenkinsLogo },
  { name: 'Git', rating: '8', logo: GitLogo },
  { name: 'Linux', rating: '8', logo: LinuxLogo },
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
