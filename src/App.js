import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './pages/home'
import Tyrewatcher from './pages/work/projectCollection';
import './styles/master.scss'
import {OBDScanz} from './pages/work/projectCollection';
import {Gremio} from './pages/work/projectCollection';
import {BattWatcher} from './pages/work/projectCollection';

const App = () => {
  return (
      <div className="app">
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/projects/tyrewatcher" element={<Tyrewatcher/>} />
          <Route path="/projects/OBDScanz" element={<OBDScanz/>} />
          <Route path="/projects/gremio" element={<Gremio/>} />
          <Route path="/projects/battwatcher" element={<BattWatcher/>} />
        </Routes>
      </div>
  );
};

export default App;
