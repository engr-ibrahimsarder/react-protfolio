import React from 'react';
import photo from '../../accesst/photo.png'

const Banner = () => {
  return (
    <div class="hero min-h-screen bg-base-100">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div className='animate__animated animate__backInRight'>
      <img src={photo} alt=''></img>
      </div>
      <div className='animate__animated animate__backInLeft'>
        <h1 class="text-6xl font-bold text-amber-400">Hi</h1>
        <h2 class="py-3 text-6xl font-bold text-amber-400">I'm Ibrahim</h2>
        <h2 class="py-3 text-6xl font-bold text-amber-400">Frontend Developer</h2>
        <h2 class="py-3 text-xl text-amber-400">I'm a passionate web developer with a focus on web development with JavaScript</h2>
        <button class="btn btn-wide btn-outline btn-warning">Contact</button>
      </div>
    </div>
  </div>
  );
};

export default Banner;