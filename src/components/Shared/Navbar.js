import React from 'react';
import { Link } from 'react-router-dom';
import resume from '../../accesst/Ibrahim_Resume.pdf';

const Navbar = () => {
  const menuItem = <>
       <li className='text-white'><Link to='/'>Home</Link></li>
        <li className='text-white'><Link to='/about'>ABOUT ME</Link></li>
        <li className='text-white'><Link to='/blogs'>BLOGS</Link></li>
        <li className='text-white'><Link to='/project'>PROJECTS</Link></li>
        <li className='text-white'><Link to='/contact'>CONTACT ME</Link></li>
        <li className='text-white'><a href={resume} download>DOWNLOAD RESUME</a></li>
  </>
  return (
    <div class="navbar bg-orange-800">
    <div class="navbar-start">
      <div class="dropdown">
        <label tabindex="0" class="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {menuItem}     
        </ul>
      </div>
      <button class="btn btn-ghost normal-case text-4xl font-mono text-bold text-amber-400 ml-28">Protfolio</button>
    </div>
    <div class="navbar-center hidden lg:flex">
      <ul class="menu menu-horizontal p-0">
         {menuItem}
      </ul>
    </div>
  </div>
  );
};

export default Navbar;