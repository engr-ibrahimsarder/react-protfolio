import React from 'react';
import project1 from '../../accesst/project-1.png'
import project2 from '../../accesst/project-2.png'
import project3 from '../../accesst/project-3.png'

const Project = () => {
  return (
    <div>
      <h1 className='text-amber-400 text-3xl text-center font-bold'>Projects</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-screen gap-6'>
    <div class="card bg-base-100 shadow-xl animate__animated animate__slideInUp">
  <figure class="px-10 pt-10">
    <img src={project1} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-amber-400 font-bold">Furniture</h2>
    <p className='text-amber-400'>This is a website for selling perfumes. For this site I used ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks and many more.</p>
    <div class="card-actions">
      <a href="https://furniture-website-48465.firebaseapp.com/"><button class="btn font-bold btn-outline btn-warning">Live Site</button></a>
    </div>
  </div>
</div>
    <div class="card bg-base-100 shadow-xl animate__animated animate__slideInUp">
  <figure class="px-10 pt-10">
    <img src={project2} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-amber-400 font-bold">Gym trainer</h2>
    <p className='text-amber-400'>This website's theme is Gym trainer. For this site I used ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs and many more.</p>
    <div class="card-actions">
      <a href="https://gym-website-2e934.firebaseapp.com/"><button class="btn font-bold btn-outline btn-warning">Live Site</button></a>
    </div>
  </div>
</div>
    <div class="card bg-base-100 shadow-xl animate__animated animate__slideInUp">
  <figure class="px-10 pt-10">
    <img src={project3} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-amber-400 font-bold">Machinery Tools</h2>
    <p className='text-amber-400'>This is a website for manufacturing machinery tools. For this site I used ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs, Stripe Payment Methods and many more.</p>
    <div class="card-actions">
      <a href="https://machinery-parts-4effc.firebaseapp.com/"> <button class="btn font-bold btn-outline btn-warning">Live Site</button></a>
    </div>
  </div>
</div>
    </div>
    </div>
  );
};

export default Project;