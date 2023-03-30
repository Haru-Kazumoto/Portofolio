import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="container-header">
        <div className="text-header">
          <h1>Portofolio.</h1>
        </div>
        <div className="router-header">
          <a href="#">Project</a>
          <a href="#skills-page">Skills</a>
          <a href="#about-page">About</a>
          <a href="#home-page">Home</a>
        </div>
    </header>
  )
}

export default Header;
