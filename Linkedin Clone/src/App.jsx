import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BodyProfile from './pages/BodyProfile'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navigazione from './components/Navigazione'
import {BrowserRouter, Route, Routes} from "react-router-dom"

import RandomProfile from './pages/RandomProfile';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigazione />
      
      <Routes>
        <Route path='/' element={<BodyProfile />}/>
        <Route path='/:id' element={<RandomProfile/>}/>
      </Routes>
      <Footer />
    </BrowserRouter>

    </>
  );
}

export default App;
