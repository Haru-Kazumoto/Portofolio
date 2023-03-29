import React from 'react';
import './content.css';
import * as AiIcons from 'react-icons/ai'; 
import * as BsIcons from 'react-icons/bs';
import * as TfiIcons from 'react-icons/tfi'; 
import * as TiIcons from 'react-icons/ti';
import * as SiIcons from 'react-icons/si';
import LanguageCards from '../language-cards/LanguageCard';
import SkillCard from '../skills-card/SkillCard';

const Content = () => {
  return (
    <div className='container-content'>
      {/* Home */}
      <div className="greetings" id='home-page'>
        <div className="blob">
          <p>
            <span className="hello">Hello, i'm</span><br/>
            <span className="name">Ziaurrahman Athaya</span><br />
            <span className="developer">Backend Developer.</span><br />
          </p>
          <img src="../src/assets/blob.png" alt="blank" />
        </div>
        <div className="image-developer">
          <img src="../src/assets/me_mirror_selfie_2.jpeg" alt="blank" />
        </div>
      </div>

      {/* About */}
      <div className="about" id='about-page'>
        <div className="about-card-background">
          <img src="../src/assets/me_siluet.jpeg" alt="Foto" />
        </div>
        <div className="about-card-content">
          <h2>About developer...</h2>
          <div className="divide" style={{
            background: 'black',
            width: '700px',
            height: '1px'
          }} />
          <p>Hi! I am Ziaurrahman Athaya, I am 17 years old in className 12 majoring in Vocational High School
            Computer and Network Engineering (TKJ). At first I was involved in the world
            programming when I was in grade 1 junior high school where I was still learning basic HTML,
            then I switched to the Python programming language which is still only CLI and moved to the Framework
            Python is Django. After getting to know the Django Framework well, I moved again to the Java programming language
            day by day I study Java and learn its Framework which is Spring boot which is Spring boot
            My favorite framework so far, and now when I made this portfolio I was confronted by it
            Field Work Practices (PKL) which are required to learn Javascript and its Framework, namely ReactJs, NestJs, and NodeJs.
          </p>
        </div>
      </div>
      <p>
        <span className="text-skills" id='skills-page'>My Skills</span>
      </p>
      <div>
        <LanguageCards />
      </div>
      
      <p>
        <span className="text-project">Project that I have worked</span>
      </p>
      <h1>THIS IS PROJECT PAGE</h1>
    </div>
  )
}

export default Content
