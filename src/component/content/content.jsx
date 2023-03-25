import React from 'react';
import './content.css';
import { Card } from 'antd';

const {Meta} = Card;
const Content = () => {
  return (
    <div className='container-content'>
      {/* Home */}
      <div className="greetings" id='home-page'>
        <div class="blob">
          <p>
            <span class="hello">Hello, i'm</span><br/>
            <span class="name">Ziaurrahman Athaya</span><br />
            <span className="developer">Backend Developer.</span>
          </p>
          <img src="../src/assets/blob.png" alt="blank" />
        </div>
        <div class="image-developer">
          <img src="../src/assets/me_mirror_selfie_2.jpeg" alt="blank" />
        </div>
      </div>

      {/* About */}
      <div className="about" id='about-page'>
        <div class="about-card-background">
          <img src="../src/assets/me_siluet.jpeg" alt="Foto" />
        </div>
        <div class="about-card-content">
          <h2>About developer...</h2>
          <div className="divide" style={{
            background: 'black',
            width: '700px',
            height: '1px',

          }} />
          <p>Hi! I am Ziaurrahman Athaya, I am 17 years old in class 12 majoring in Vocational High School
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

      {/* Skill */}
      {/* TODO : Ubah card ini jadi carousels */}
      <p>
        <span className="text-skills">What I mastered in </span>
      </p>
      <div className="skills" id='skills-page'>
        {/* Nestjs Card */}
        <Card
          hoverable
          style={{width: 500, border: '3px solid #ccc', height: '400px'}}
          cover={<img alt="nest-js" src="../src/assets/NestjsLogo.png" style={{marginBottom: "35px"}}/>}
        >
          <Meta title="Nest Js" description="www.instagram.com" style={{
            textAlign: 'center'
            }}/>
        </Card>
        {/* Spring boot card */}
        <Card
          hoverable
          style={{width: 500, border: '3px solid #ccc'}}
          cover={<img alt="nest-js" src="../src/assets/spring-boot.png" style={{width: '300px', marginLeft: "40px", marginBottom: "54px"}}/>}
        >
          <Meta title="Spring Boot" description="www.instagram.com" style={{
            textAlign: 'center'
            }}/>
        </Card>
        {/* Django card */}
        <Card
          hoverable
          style={{width: 500, border: '3px solid #ccc'}}
          cover={<img alt="nest-js" src="../src/assets/djangoLogo.png" style={{width: '300px', marginLeft: "30px", marginBottom: "13px"}} />}
        >
          <Meta title="Django" description="www.instagram.com" style={{
            textAlign: 'center'
            }}/>
        </Card>
        {/* Reactjs card */}
        <Card
          hoverable
          style={{width: 500, border: '3px solid #ccc'}}
          cover={<img alt="nest-js" src="../src/assets/react.svg" style={{width: "180px", marginLeft: "95px", marginTop: "15px", marginBottom: "40px"}}/>}
        >
          <Meta title="React Js" description="www.instagram.com" style={{
            textAlign: 'center'
            }}/>
        </Card>
      </div>
    </div>
  )
}

export default Content
