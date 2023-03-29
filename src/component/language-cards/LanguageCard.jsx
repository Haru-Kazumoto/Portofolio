import React from 'react';
import './style.css';

const LanguageCards = () => {
  return (
    <div class="container">
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <img src="../src/assets/Django.png" />
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
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <img src="../src/assets/NestJs.png" />
                    <h3>Nest Js</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Nestjs is one of the fastest-growing Node. js frameworks for building efficient, 
                        scalable, and enterprise-grade backend applications using Node. js.</p>
                        <a href="https://nestjs.com/">Read Documentation</a>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <img src="../src/assets/Spring-Boot.png" style={{display: 'block', margin: 'auto'}}/>
                    <h3>Spring Boot</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Java Spring Boot (Spring Boot) is a tool that makes developing
                        web application and microservices with Spring Framework faster and easier </p>
                        <a href="https://spring.io/">Read Documentation</a>
                </div>
            </div>
        </div>
        <div class="cards">
            <div class="face face1">
                <div class="content">
                    <img src="../src/assets/Nodejs.png" style={{display: 'block', margin: 'auto', marginBottom: '30px', width: '190px'}}/>
                    <h3>Node Js</h3>
                </div>
            </div>
            <div class="face face2">
                <div class="content">
                    <p>Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.</p>
                        <a href="https://nodejs.org/en">Read Documentation</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LanguageCards
