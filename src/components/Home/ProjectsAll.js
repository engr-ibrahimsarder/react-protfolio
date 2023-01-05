import React from 'react';
import fashonova1 from '../../accesst/fashonova1.PNG';
import tools from '../../accesst/tools.png';
import doctor from '../../accesst/Doctor.PNG';
import ema from '../../accesst/ema.PNG';
import service from '../../accesst/service.PNG';

const ProjectsAll = () => {
  return (
    <div>
        <h1 className='text-amber-400 text-5xl text-center font-bold mt-12'>My Projects</h1>
     <div className='flex items-center justify-center'>
      <div className="divider bg-amber-400 w-80 h-1 rounded-md"></div>
      </div>
      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 '>
       <div className="card w-full shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={tools} alt="Shoes" className="w-96 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-amber-400 text-2xl font-bold">Machine Tools</h2>
    <p><span className='text-amber-400 text-xl'>Key Features: </span><span className='text-white text-xl'>Payment Method, Admin Panel, User Panel, Comfortable UI UX, Responsive, Dynamic Data and Authentication</span></p>
    <p><span className='text-amber-400 text-xl'>Technology Used: </span><span className='text-white text-xl'>ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs, Stripe Payment </span></p>
    <div className="card-actions">
     <button className='btn btn-outline btn-warning text-xl font-bold'><a href="https://machinery-parts-4effc.firebaseapp.com/">Live Site</a></button>
    </div>
  </div>
</div>
<div className="card w-full shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={fashonova1} alt="Shoes" className="w-96 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white text-2xl font-bold">Fashonova</h2>
    <p><span className='text-amber-400 text-xl'>Key Features: </span><span className='text-white text-xl'>Payment Method, Admin Panel, User Panel, Comfortable UI UX, Responsive, Dynamic Data and Authentication</span></p>
    <p><span className='text-amber-400 text-xl'>Technology Used: </span><span className='text-white text-xl'>ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs, Stripe Payment </span></p>
    <div className="card-actions">
     <button className='btn btn-outline btn-warning text-xl font-bold'><a href="https://bdfashonova.firebaseapp.com/">Live Site</a></button>
    </div>
  </div>
</div>
<div className="card w-full shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={doctor} alt="Shoes" className="w-96 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white text-2xl font-bold">DOCTORS PORTAL</h2>
    <p><span className='text-amber-400 text-xl'>Key Features: </span><span className='text-white text-xl'>Payment Method, Admin Panel, User Panel, Comfortable UI UX, Responsive, Dynamic Data and Authentication</span></p>
    <p><span className='text-amber-400 text-xl'>Technology Used: </span><span className='text-white text-xl'>ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs, Stripe Payment </span></p>
    <div className="card-actions">
     <button className='btn btn-outline btn-warning text-xl font-bold'><a href="https://doctors-portal-8b078.firebaseapp.com/">Live Site</a></button>
    </div>
  </div>
</div>
<div className="card w-full shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={ema} alt="Shoes" className="w-96 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white text-2xl font-bold">DOCTORS PORTAL</h2>
    <p><span className='text-amber-400 text-xl'>Key Features: </span><span className='text-white text-xl'>Payment Method, Admin Panel, User Panel, Comfortable UI UX, Responsive, Dynamic Data and Authentication</span></p>
    <p><span className='text-amber-400 text-xl'>Technology Used: </span><span className='text-white text-xl'>ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs</span></p>
    <div className="card-actions">
     <button className='btn btn-outline btn-warning text-xl font-bold'><a href="https://ema-john-simple-b099e.firebaseapp.com/">Live Site</a></button>
    </div>
  </div>
</div>
<div className="card w-full shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={service} alt="Shoes" className="w-96 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white text-2xl font-bold">DOCTORS PORTAL</h2>
    <p><span className='text-amber-400 text-xl'>Key Features: </span><span className='text-white text-xl'>Payment Method, Admin Panel, User Panel, Comfortable UI UX, Responsive, Dynamic Data and Authentication</span></p>
    <p><span className='text-amber-400 text-xl'>Technology Used: </span><span className='text-white text-xl'>ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs, Stripe Payment </span></p>
    <div className="card-actions">
     <button className='btn btn-outline btn-warning text-xl font-bold'><a href="https://genius-car-services-d3e3a.firebaseapp.com/">Live Site</a></button>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default ProjectsAll;