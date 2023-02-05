import React from 'react'

const projects = [
  {
    title: 'Incedo Cricket League Portal',
    info: 'Incedo Cricket League (ICL) is a website to manage real-time auction of different cricket teams and provides overview of teams, players, accounts.',
    github: 'https://github.com/pulkitbajaj1999/icl',
    server: 'http://www.incedocricketleague.in/',
    imgSrc: 'img/projects/icl.png',
  },
  {
    title: 'Musicwire',
    info: 'Musicwire is a music webapp built on MERN stack, on which you can enjoy listening your favorite songs, create your playlist and add songs to them.',
    github: 'https://github.com/pulkitbajaj1999/musicwire',
    server: 'https://musicwire.onrender.com/',
    imgSrc: 'img/projects/musicwire.png',
  },
  {
    title: 'Chess19',
    info: 'Play chess online with your friends on this website. It is built on MERN stack',
    github: 'https://github.com/pulkitbajaj1999/chess19',
    server: 'https://chess19.onrender.com/',
    imgSrc: 'img/projects/chess19.png',
  },
  {
    title: 'Localkart',
    info: 'Ecommerce website on which sellers can list their products and buyers can view and order. It uses Node-Express as backend framework,  ejs templating engine and MongoDB for database.',
    github: 'https://github.com/pulkitbajaj1999/localkart',
    server: 'https://localkart.onrender.com/',
    imgSrc: 'img/projects/localkart.png',
  },
  {
    title: 'Boltshare',
    info: 'It is a webapp which allows you to share files easily. It supports drag and drop of files and create share link which you can email directly from the app itself. It uses Node-Express framework and ejs templating engine.',
    github: 'https://github.com/pulkitbajaj1999/boltshare',
    server: 'https://boltshare.onrender.com/',
    imgSrc: 'img/projects/boltshare.png',
  },
  {
    title: 'Task Manager',
    info: 'Manage your daily tasks easily with this webapp. Add new tasks, cross or delete existing tasks. Built on node-express framework and uses MongoDB for database.',
    github: 'https://github.com/pulkitbajaj1999/task-manager',
    server: 'https://task-manager-4nzv.onrender.com',
    imgSrc: 'img/projects/task-manager.png',
  },
]
const MyWorks = () => {
  return (
    <section className="container" id="blogs">
      <div className="blogs-content">
        <div className="main-title">
          <h2>
            My <span>Works</span>
            <span className="bg-text">My Works</span>
          </h2>
        </div>
        <div className="blogs">
          {projects.map((project, i) => (
            <div className="blog" key={i}>
              <a href={project.server} target="_blank">
                <img src={project.imgSrc} alt="" />
              </a>
              <div className="blog-text">
                <h4>{project.title}</h4>
                <p>{project.info}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MyWorks
