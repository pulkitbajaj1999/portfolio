import React, { useEffect } from 'react'
const Controls = () => {
  const scrollHandler = (e) => {
    e.preventDefault()
    const section = document.getElementById(e.target.getAttribute('data-id'))
    const sectionPos = section.offsetTop
    window.scroll({
      top: sectionPos,
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    const tolerance = 5 // setting tolerance to 5px
    const menuItems = document.querySelectorAll('.control')
    window.addEventListener('scroll', function () {
      const scrollPos = window.scrollY
      menuItems.forEach((menuItem) => {
        const section = document.getElementById(
          menuItem.getAttribute('data-id')
        )
        const sectionPos = section.offsetTop
        const sectionHeight = section.offsetHeight
        if (
          scrollPos >= sectionPos - tolerance &&
          scrollPos < sectionPos + sectionHeight - tolerance
        ) {
          menuItem.classList.add('active-btn')
        } else {
          menuItem.classList.remove('active-btn')
        }
      })
    })
  }, [])
  return (
    <div className="controls">
      <div
        className="control active-btn"
        onClick={scrollHandler}
        data-id="home"
      >
        <i className="fas fa-home"></i>
      </div>
      <div className="control" data-id="about" onClick={scrollHandler}>
        <i className="fas fa-user"></i>
      </div>
      <div className="control" data-id="blogs" onClick={scrollHandler}>
        <i className="fas fa-briefcase"></i>
      </div>
      <div className="control" data-id="contact" onClick={scrollHandler}>
        <i className="fas fa-envelope-open"></i>
      </div>
    </div>
  )
}

export default Controls
