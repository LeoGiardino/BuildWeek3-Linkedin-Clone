import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BodyProfile from './pages/BodyProfile'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navigazione from './components/Navigazione'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RandomProfile from './pages/RandomProfile';
import BodyHome from './pages/HomeBody';
import BodyJobs from './pages/BodyJobs'
import Footer from './components/Footer';
import JobsPreferiti from './pages/JobsPreferiti';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navigazione />
      
      <Routes>
        <Route path='/' element={<BodyHome />}/>
        <Route path='/jobs' element={<BodyJobs />}/>
        <Route path='/me' element={<BodyProfile />}/>
        <Route path='/:id' element={<RandomProfile/>}/>
        <Route path='/jobs/preferiti' element={<JobsPreferiti />} />
      </Routes>
    </BrowserRouter>

    </>
  );
}

export default App;
