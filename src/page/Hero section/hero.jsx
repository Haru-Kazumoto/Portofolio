import React from 'react'
import './style.css'
import Icons from '../../component/icons/icons'
const Hero = () => {
  return (
    <div className="greetings" id='home-page'>
        <div className="image-developer">
            <img src="../src/assets/me2.png" alt="blank" />
        </div>
        <img src="../src/assets/blob.png" alt="blank" />
        <div className="title">
            <p>
                <h1>Hello!</h1>
                <span>I'm </span>
                <span className="name">Ziaurrahman Athaya</span>,<br />
                <span className="developer">As a Backend Developer.</span><br />
                <Icons />
            </p>
        </div>
        <div className="footer-section">
          <img src="../src/assets/dot_img2.svg" alt="" />
        </div>
    </div>
  )
}

export default Hero
