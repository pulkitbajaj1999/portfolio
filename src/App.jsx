import React from 'react'
import Header from './components/Header'
import About from './components/About/About'
// import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Controls from './components/Controls'
import MyWorks from './components/MyWorks'

const App = () => {
  const changeThemeHandler = () => {
    document.body.classList.toggle('light-mode')
  }
  return (
    <React.Fragment>
      <div className="main-content">
        <Header />
        <main>
          <About />
          {/* <Portfolio /> */}
          <MyWorks />
          <Contact />
        </main>
        <Controls />
        <button className="theme-btn" onClick={changeThemeHandler}>
          <i className="fas fa-adjust"></i>
        </button>
      </div>
    </React.Fragment>
  )
}

export default App
