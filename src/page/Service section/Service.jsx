import React from 'react';
import './style.css';
import * as ReactIcons from 'react-icons/all';

const Icon = ({ name, ...props }) => {
    const IconComponent = ReactIcons[name];
    return <IconComponent {...props} />;
};

const Service = () => {
  return (
    <div className="service-container" id='service-page'>
        <div className="title-service">
            <h5 style={{color: "rgb(241, 74, 74)"}}>What I Do</h5>
            <h1>My Service</h1>
        </div>
        <div className="divide"></div>
        <div className="card-container">
            <div className="card-service">
                <i><Icon name="TfiStatsUp"  /></i>
                <h2>Fast learner</h2>
                <p className="content-card">
                    able to learn quickly along
                    with the development of technology
                </p>
            </div>
            <div className="card-service">
                <i><Icon name="FaLaptopCode" /></i>
                <h2>OOP knowledge</h2>
                <p className="content-card">
                    Understanding of Object Oriented Programming (OOP) systems
                </p>
            </div>
            <div className="card-service">
                <i><Icon name="AiOutlineBug" /></i>
                <h2>Debugging</h2>
                <p className="content-card">
                    Expert in structured application debugging
                </p>
            </div>
            <div className="card-service">
                <i><Icon name="AiOutlineComment" /></i>
                <h2>Communication</h2>
                <p className="content-card">
                    Able to communicate well with the team
                </p>
            </div>
        </div>
    </div>
  )
}

export default Service
