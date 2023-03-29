import React from 'react';
import * as BsIcons from 'react-icons/bs';
import * as SiIcons from 'react-icons/si';
import './icons.css';

const Icons = () => {
  return (
    <div className="wrapper">
        <div className="icon-instagram">
            <div className="tooltip">Instagram</div>
            <span><i><BsIcons.BsInstagram style={{width: '10px'}}/></i></span>
        </div>
        <div className="icon-tiktok">
            <div className="tooltip">Tiktok</div>
            <span><i><SiIcons.SiTiktok /></i></span>
        </div>
        <div className="icon-linkedin">
            <div className="tooltip">Linkedin</div>
            <span><i><BsIcons.BsLinkedin /></i></span>
        </div>
        <div className="icon-github">
            <div className="tooltip">Github</div>
            <span><i><BsIcons.BsGithub /></i></span>
        </div>
    </div>
  )
}

export default Icons;
