import React from 'react';
import './style.css';

const Project = () => {
  return (
    <div className="container-project" id='project-page'>
      <div className="title-project">
        <h1>Last project</h1>
      </div>
      <div className="divide" />
      <div className="hr-project">
        <img src='../src/assets/HR-PROJECT.png' alt="" />
        <div className="description-project-hr">
          <h2>Human Resource Management</h2>
          <p>the most important part in organizations and companies 
            in managing its human resources. with good and correct resource management,
            the company will develop better.</p><br />
          <p className='paragraph-2-hr'>HRM is more maintenance oriented and focuses on
            administrative tasks such as payroll and managing employee files such as employee payslips. While HRD orientation lies in learning and development
            and focuses on improving employee performance.</p>
        </div>
      </div>
      <div className="ej-monitoring">
        <img src='../src/assets/Ej-img.PNG' alt="" />
        <div className="description-project-ej">
          <h2>Elektronik Journal Monitoring</h2>
          <p>Electronic Journal Is a media for recording all activities 
            at an ATM machine stored on a hard disk or floppy disk.
            Makes it easy to report problems with ATMs or customer transactions without 
            taking a long time for maintenance</p>
        </div>
        <div className="stack">

        </div>
      </div>
    </div>
  )
}

export default Project
