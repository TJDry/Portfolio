import React from 'react'
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './styles/master.scss'
const container = document.querySelector('#root');
const root = ReactDOMClient.createRoot(container)


root.render(
    <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="*" element={ <App /> }></Route>
          </Routes>
        </BrowserRouter>
    </React.StrictMode>,
  );