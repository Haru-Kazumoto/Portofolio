import React from 'react';
import './style.css';
import * as TfiIcons from 'react-icons/tfi';

const SkillCard = () => {
  return (
    <div class="container">
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <TfiIcons.TfiStatsUp />
                    <h3 style={{marginTop: '25px'}}>Django</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. </p>
                        <a href="https://www.djangoproject.com/">Read Documentation</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SkillCard

/**
 * <div className="skills" >
        <div className="card">
          <TfiIcons.TfiStatsUp className='icon-card'/>
          <h1 className="description-title">Fast learn</h1>
          <p className='description-content'>Fast learner with new technology</p>
        </div>
        <div className="card">
          <TiIcons.TiMessages className='icon-card'/>
          <h1 className="description-title">Communication</h1>
          <p className='description-content'>Good communication and teamwork skill</p>
        </div>
        <div className="card">
          <BsIcons.BsCodeSlash className='icon-card'/>
          <h1 className="description-title">Oop knowledge</h1>
          <p className='description-content'>Strong knowledge in OOP</p>
        </div>
        <div className="card">
          <AiIcons.AiOutlineBug className='icon-card'/> 
          <h1 className="description-title">Debugging</h1>
          <p className='description-content'>Expert debugging in application</p>
        </div>
      </div>
 */
