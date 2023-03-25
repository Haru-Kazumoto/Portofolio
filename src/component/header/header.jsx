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
          <a href="#">Skills</a>
          <a href="#">About</a>
          <a href="#">Home</a>
        </div>
    </div>
  )
}

export default Header;
