import React from 'react';
import './content.css';
import { Image } from 'antd';
import Hero from '../../page/Hero section/hero';
import About from '../../page/About section/About';
import Service from '../../page/Service section/Service';
import Skills from '../../page/Skills section/Skills';

const Content = () => {
  return (
    <main className='container-content'>
      <section>
        <Hero />
        <About /> 
        <Service />
        <Skills />
      </section>
      
      <p>
        <span className="text-project">Project that I have worked</span>
      </p>
      <div className="project-page">
          <Image src='../src/assets/HR-PROJECT.png' style={{
            width: '600px',
            borderRadius: '10px',
            boxShadow:' 0 20px 50px rgba(58, 58, 58, 0.4)',
            margin: '20px'
          }}/>
          <div className="description-project">
            <h1>Human Resource Management</h1>
            <p>
              <span className="description-content">
                Human Resources is the most important part in organizations and companies in managing their human resources. 
                with good and correct resource management, the company will develop better.
              </span><br />
              <span className="stack">
                Stack : 
              </span>
              <span className="image-logo">
                <img src="../src/assets/NestJs.png" alt="nest" style={{width: '50px'}}/>
                <img src="../src/assets/ReactJs.png" alt="react" style={{width: '50px'}}/>
              </span>
            </p>
          </div>
      </div>
    </main>
  )
}

export default Content
