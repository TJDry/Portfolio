import React, { useRef , useEffect, Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
import './styles/master.scss'
// import { Mouse } from './Mouse';

// const Home = lazy(()=> import('./pages/home'));
// const Tyrewatcher = lazy(()=> import('./pages/work/tyreWatcher'));
// const OBDScanz = lazy(()=> import('./pages/work/obdScanz'));
// const BattWatcher = lazy(()=> import('./pages/work/battWatcher'));
// const Gremio = lazy(()=> import('./pages/work/gremio'));
// const Android11 = lazy(()=> import('./pages/work/android11'));

import Home from './pages/home';
import ProjectPage from './pages/projects';
import About from './pages/About';
import Contact from './pages/contactUs';
import { projectData } from './components/ProjectGrid/projectData';
import Projects from './pages/dynamicProjects';
import Navigation from './components/Navigation/navigation';
import Footer from './components/Footer/footer';

function App(){
  // const mouseRefs = useRef([]);
  // // reset on re-renders
  // mouseRefs.current = [];
     
  // useEffect(() => {
  //   mouseRefs.current.forEach(ref => ref.moveTo(window.innerWidth, window.innerHeight));
    
  //   const onMove = ({ clientX, clientY }) => {      
  //     mouseRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
  //   };
    
  //   window.addEventListener("pointermove", onMove);
  //   return () => window.removeEventListener("pointermove", onMove);
  // }, []); 
  // const addMouseRef = ref => {
  //   if (ref) {
  //     mouseRefs.current.push(ref);
  //   }    
  // };

  return (  
    <div className="app">'
      <Navigation />
      <Suspense>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<Contact />} />
          <Route path="/projects/:projectTitle" element={<Projects />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path='/projects' element={<ProjectPage />} /> {/* Use 'element' prop instead of 'component' */}
          <Route path='/about' element={<About />} />
        </Routes>
      </Suspense>
      <Footer/>
    </div>
  );
}

export default App;
