import React from 'react';
import photo from '../../accesst/photo.png'
import './Banner.css';

const About = () => {
  return (
    <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div id='bg' className='w-6/12 animate__animated animate__fadeInDown'>
      <img style={{width:'500px', height: '300px', borderRadius: '0px 0px 80% 80%'}} src={photo} alt=''></img>
      </div>
      <div className='w-6/12 animate__animated animate__fadeInUp lg:pr-44'>
        <h1 class="text-xl text-justify text-amber-400 my-5">
        My name is Ibrahim Sarder and I'm a tech-savvy teenager with a strong interest in programming. I am passionate in providing solutions that improve people's lives while also challenging me. Currently enhancing my abilities as a Front-End and Back-End developer.</h1>

        <h2 class="text-xl text-justify text-amber-400 my-5">I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing with provided layouts. I'm always improving myself with each project being put in my hands.</h2>

        <h3 class="text-xl text-justify text-amber-400">I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.
        </h3>
      </div>
    </div>
  </div>
  );
};

export default About;