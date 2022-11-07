import React, { useRef , useEffect, useState} from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Tyrewatcher, { Android11 } from './pages/work/projectCollection';
import './styles/master.scss'
import {OBDScanz} from './pages/work/projectCollection';
import {Gremio} from './pages/work/projectCollection';
import {BattWatcher} from './pages/work/projectCollection';
import { Mouse } from './Mouse';
import { ScaleLoader } from 'react-spinners';

const override = {
  display: "inline",
  margin: "0 auto",
  borderColor: "red",
  position:"relative",
  left: "50%",
  top: "50vh",
};

function App(){
  const [loading,setLoading] = useState(false);

  useEffect(() =>{
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 2000)
  }, [])

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
        {
          loading ?
          <ScaleLoader loading={loading} color={"#ffffff"} cssOverride={override} size={150} />
          :

        <div className='App-Header'>
        <Mouse ref={addMouseRef} delay={0.05}/>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/projects/tyrewatcher" element={<Tyrewatcher/>} />
          <Route path="/projects/OBDScanz" element={<OBDScanz/>} />
          <Route path="/projects/gremio" element={<Gremio/>} />
          <Route path="/projects/battwatcher" element={<BattWatcher/>} />
          <Route path="/projects/android11" element={<Android11/>} />
        </Routes>
        </div>
        }
      </div>
  );
};

export default App;
