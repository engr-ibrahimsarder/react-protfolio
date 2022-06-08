import React from 'react';
import photo from '../../accesst/photo.png'

const About = () => {
  return (
    <div class="hero min-h-screen  bg-base-100">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div className='w-6/12 animate__animated animate__fadeInDown'>
      <img src={photo} alt=''></img>
      </div>
      <div className='w-6/12 animate__animated animate__fadeInUp'>
        <p class="text-xl text-amber-400">
        My name is Ibrahim Sarder, and I'm a tech-savvy teenager with a strong interest in programming. I am passionate in providing solutions that improve people's lives while also challenging me. Currently enhancing my abilities as a Front-End and Back-End developer.
        I develop websites and applications using HTML, CSS, and JavaScript. I am familiar with developing with provided layouts. I'm always improving myself with each project being put in my hands.
        I am a dedicated person who pursues his dreams, hardworking and results oriented, I always seek to achieve my best version.
        </p>

      </div>
    </div>
  </div>
  );
};

export default About;