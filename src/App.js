import React, { useRef , useEffect, Suspense} from 'react'
import { Routes, Route } from "react-router-dom";
import './styles/master.scss'
import { Mouse } from './Mouse';

// const Home = lazy(()=> import('./pages/home'));
// const Tyrewatcher = lazy(()=> import('./pages/work/tyreWatcher'));
// const OBDScanz = lazy(()=> import('./pages/work/obdScanz'));
// const BattWatcher = lazy(()=> import('./pages/work/battWatcher'));
// const Gremio = lazy(()=> import('./pages/work/gremio'));
// const Android11 = lazy(()=> import('./pages/work/android11'));

import Android11 from './pages/work/android11';
import Gremio from './pages/work/gremio';
import OBDScanz from './pages/work/obdScanz';
import BattWatcher from './pages/work/battWatcher';
import Tyrewatcher from './pages/work/tyreWatcher';
import Home from './pages/home';

function App(){
  const mouseRefs = useRef([]);
  // reset on re-renders
  mouseRefs.current = [];
     
  useEffect(() => {
    mouseRefs.current.forEach(ref => ref.moveTo(window.innerWidth / 2, window.innerHeight / 2));
    
    const onMove = ({ clientX, clientY }) => {      
      mouseRefs.current.forEach(ref => ref.moveTo(clientX, clientY));
    };
    
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []); 
  const addMouseRef = ref => {
    if (ref) {
      mouseRefs.current.push(ref);
    }    
  };

return (  
      <div className="app">
        <Mouse ref={addMouseRef}/>
        <Suspense>
          <Routes> 
            <Route path="/" element={<Home />} />
            <Route path="/projects/tyrewatcher" element={<Tyrewatcher/>} />
            <Route path="/projects/OBDScanz" element={<OBDScanz/>} />
            <Route path="/projects/gremio" element={<Gremio/>} />
            <Route path="/projects/battwatcher" element={<BattWatcher/>} />
            <Route path="/projects/android11" element={<Android11/>} />
          </Routes>{" "}
        </Suspense>
      </div>
  );
};

export default App;
