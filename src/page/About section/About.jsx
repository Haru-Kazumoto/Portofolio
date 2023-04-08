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
          <span>Hi! I am Ziaurrahman Athaya in grade 11 of a Vocational High School majoring in Informatics and Network Engineering (TKJ).
            I'm 17 years old, and a native Indonesian citizen. 
            I was already involved in the world of programming when I was in grade 1 of junior high school, 
            at that time my first programming language was Python and my first framework was the Django framework from Python itself. 
            Currently I already have more than 2 skill framework and want to become a professional programmer in the future.</span>
          <span className="contact">
            Contact me : jiaathaya@gmail.com | +62 889-7697-2688
          </span>
        </p>
      </div>
    </div>
  )
}

export default About
