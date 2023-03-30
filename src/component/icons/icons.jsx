import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import './icons.css';

const Icons = () => {
  return (
    <ul className="wrapper">
        <li className="icon instagram">
          <span className="tooltip">@kiruukaa</span>
          <span><i className="fab fa-instagram"></i></span>
        </li>
        <li className="icon github">
          <span className="tooltip">Github</span>
          <span><i className="fab fa-github"></i></span>
        </li>
        <li className="icon linkedin">
          <span className="tooltip">Linkedin</span>
          <span><i className="fa-brands fa-linkedin"></i></span>
        </li>
      </ul>
  )
}

export default Icons;
