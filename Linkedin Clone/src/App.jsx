
import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import BodyProfile from './pages/BodyProfile'
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Navigazione from './components/Navigazione'

function App() {
  return (
    <>
      <Navigazione />
      <BodyProfile />
    </>
  );
}

export default App;
