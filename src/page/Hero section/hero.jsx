import React from 'react'
import './style.css'
import Icons from '../../component/icons/icons'
const Hero = () => {
  return (
    <div className="greetings" id='home-page'>
        <div className="image-developer">
            <img src="../src/assets/people2.png" alt="blank" />
        </div>
        <img src="../src/assets/blob.png" alt="blank" />
        <div className="title">
            <p>
                <h1>Hello!</h1>
                <span>I'm </span>
                <span className="name">Ziaurrahman Athaya</span>,<br />
                <span className="developer">As Backend Developer.</span><br />
                <Icons />
            </p>
        </div>
    </div>
  )
}

export default Hero
