import React from 'react'
import comunicazione from "../assets/comunicazione.jpg"
import abbraccio from "../assets/abbraccio.jpg"
import suggerimenti from "../assets/suggerimenti.jpg"
import logo from "../assets/linkedin-logo.png"
import "../styles/sideBar.css"


export default function LearningComponent() {
  return (
    <>  
    <div className='backgroundSide rounded-3'>
        <p className='text-white mx-3 my-0 py-2'><img className='logo' src={logo} alt="" /> <b>LEARNING</b></p>
        <p className='text-white mx-3 my-0'>Aggiungi nuove competenze con questi corsi, gratuiti per 24 ore</p>
        <div className='d-flex text-white border-bottom border-secondary mx-3 pt-3'>
            <p >
                <img className='w-100 h-100' src={comunicazione} alt="comunicazione" />
           </p>
           <p className='ms-2 '>
                <b>Comunicazione ad alto rischio</b> <br />
                <span className='text-secondary'><b className='visualizzazioni'>2.368 visualizzazioni </b></span>
           </p>
        </div>
        <div className='d-flex text-white border-bottom border-secondary mx-3 pt-3'>
            <p >
                <img src={abbraccio} alt="comunicazione" />
           </p>
           <p className='ms-2 '>
                <b>Abbracciare il cambiamento</b> <br />
                <span className='text-secondary'><b className='visualizzazioni'>1.784 visualizzazioni </b></span>
           </p>
        </div>
        <div className='d-flex text-white border-bottom border-secondary mx-3 pt-3'>
            <p >
                <img src={suggerimenti} alt="comunicazione" />
           </p>
           <p className='ms-2 '>
                <b>Suggerimenti per i dirigenti</b> <br />
           </p>
        </div>
    </div>
    </>
  )
}
