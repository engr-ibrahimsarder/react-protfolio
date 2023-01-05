import ParticlesBackground from './components/ParticlesBackground';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/Home/About';
import Contact from './components/Home/Contact';
import Home from './components/Home/Home';
import Footer from './components/Shared/Footer';
import Navbar from './components/Shared/Navbar';
import Blogs from './components/Home/Blogs';
import ProjectsAll from './components/Home/ProjectsAll';


function App() {
  return (
    <div>
      <ParticlesBackground></ParticlesBackground>
          <Navbar></Navbar>        
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/blogs' element={<Blogs></Blogs>}></Route>
            <Route path='/contact' element={<Contact></Contact>}></Route>
            <Route path='/projects' element={<ProjectsAll></ProjectsAll>}></Route>
          </Routes>
          <Footer></Footer>
    </div>
  );
}

export default App;
