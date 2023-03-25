import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className="container-header">
        <div className="gif-header">
          <img src="../src/assets/catHeader.gif" alt="" />
        </div>
        <div className="router-header">
          <a href="#">Project</a>
          <a href="#skills-page">Skills</a>
          <a href="#about-page">About</a>
          <a href="#home-page">Home</a>
        </div>
    </div>
  )
}

export default Header;
