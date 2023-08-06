import React from 'react';
import { Link } from 'react-router-dom';
import photo from '../../accesst/photo.png';
import './Banner.css';

const Banner = () => {
  return (
    <div class="hero min-h-screen">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div id='bg' className='animate__animated animate__backInRight'>
      <img style={{width:'100%'}} src={photo} alt=''></img>
      </div>
      <div className='animate__animated animate__backInLeft lg:pr-44'>
        <h1 class="text-6xl font-bold text-amber-400">Hi</h1>
        <h2 class="py-3 text-6xl font-bold text-amber-400">I'm Ibrahim</h2>
        <h3  class="py-3 text-5xl font-bold"><span id='effect'>Software</span> <span className='text-amber-400'>Engineer</span></h3>
        <h2 class="py-3 text-xl text-gray-300">I'm a passionate web developer with a focus on web development with JavaScript.</h2>
        <Link to='/contact' class="btn btn-wide btn-outline btn-warning text-xl font-bold" data-micron="bounce">Contact</Link>
      </div>
    </div>
  </div>
  );
};

export default Banner;