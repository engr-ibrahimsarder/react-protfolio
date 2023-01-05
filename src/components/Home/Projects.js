import photo1 from '../../accesst/project-1.png';
// import photo2 from '../../accesst/project-2.png'
// import photo3 from '../../accesst/project-3.png'



const Projects = () => {
  
  
  return (
    <div>
     <h1 className='text-amber-400 text-5xl text-center font-bold mt-12'>My Best Projects</h1>
     <div className='flex items-center justify-center'>
      <div className="divider bg-pink-400 w-96 h-1 rounded-md"></div>
      </div>
        <div>
        <div className="card w-full shadow-2xl">
  <figure className="px-10 pt-10">
    <img src={photo1} alt="Shoes" className="w-96 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-white text-2xl font-bold">Fashonova</h2>
    <p className='text-amber-300'>This is a website for selling Product. For this site I used ReactJs, Javascript, React Router-DOM, JSX, Tailwind CSS, Firebase Authentication, React Hooks, MongoDB, ExpressJs, NodeJs, Stripe Payment Methods and many more.</p>
    <div className="card-actions">
     <button className='btn btn-outline btn-warning text-xl font-bold'><a href="https://bdfashonova.firebaseapp.com/">Live</a></button>
    </div>
  </div>
</div>
        </div>
    </div>
  );
};

export default Projects;