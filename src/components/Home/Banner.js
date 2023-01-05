import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../accesst/photo.png';

const Banner = () => {
  return (
    <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div className='animate__animated animate__backInRight w-12/6'>
      <img style={{width:'80%'}} src={photo} alt=''></img>
      </div>
      <div className='animate__animated animate__backInLeft w-12/6'>
        <h1 class="text-6xl font-bold text-amber-400">Hi</h1>
        <h2 class="py-3 text-6xl font-bold text-amber-400">I'm Ibrahim</h2>
        <h2 class="py-3 text-5xl font-bold text-amber-400">Frontend Developer</h2>
        <h2 class="py-3 text-xl text-amber-400">I'm a passionate web developer with a focus on web development with JavaScript</h2>
        <Link to='/contact' class="btn btn-wide btn-outline btn-warning text-xl font-bold" data-micron="bounce">Contact</Link>
      </div>
    </div>
  </div>
  );
};

export default Banner;