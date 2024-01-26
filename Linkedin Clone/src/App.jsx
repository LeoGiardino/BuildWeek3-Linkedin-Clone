
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BodyProfile from './pages/BodyProfile'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navigazione from './components/Navigazione'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import RandomProfile from './pages/RandomProfile';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigazione />
      
      <Routes>
        <Route path='/me' element={<BodyProfile />}/>
        <Route path='/:nome' element={<RandomProfile/>}/>
      </Routes>
      
    </BrowserRouter>
    </>
  );
}

export default App;
