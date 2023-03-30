import React from 'react'
import './style.css'
const About = () => {
  return (
    <div className="about" id='about-page'>
      <div className="card">
        <img src="../src/assets/me4.jpeg" alt="" />
      </div>
      <div className="typography">
        <p>
          <h1>Hello!</h1>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
              officia deserunt mollit anim id est laborum.</span>
        </p>
      </div>
    </div>
  )
}

export default About
