import React from 'react'
import '../styles/PrimoBox.css'
import '../styles/ColorPallette.css'


export default function PrimoBox() {
  return (
    <div className='primoBox compBackground'>
        <div className='immagineP'></div>
        <img src="https://media.licdn.com/dms/image/C4E16AQGJAgsZMcUGcw/profile-displaybackgroundimage-shrink_350_1400/0/1646321291738?e=1711584000&v=beta&t=S6CGjbsodn1yzBo9nvtq7vtii1_9Gm2mA_uVNy4kSiI" alt="" style={{ width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }} />
        <div className='d-flex p-3'>
          <div className='informazioni pt-5'>
            <h3 className='pageWhtTxt mb-1'>Nome Utente <span className='verifica'><i class="bi bi-shield-check"></i> Inizia la verifica</span></h3> 
            <p className='pageWhtTxt mb-2'>Lavoro</p>
            <p className='pageGrayTxt mb-2'>Indirizzo <span><a href="" style={{ color: '#6ABAFB', textDecoration: 'none' }}>Informazioni di contatto</a></span></p>
            <p className='pageBlueTxt mb-2'>Collegamenti</p>
            <div className='bottoniP'>
              <button className='btn1'>Disponibile per</button>
              <button className='btn2'>Aggiungi Sezione</button>
              <button className='btn3'>Altro</button>
            </div>
          </div>
          <div className='w-25'>
            <div className='d-flex align-items-center pt-5'>
              <div className='box ' style={{ width: '33px', height: '33px', backgroundColor: 'red' }}>
              </div>
              <span className='ms-2 pageWhtTxt'>Nome Azienda</span>
            </div>
          </div>
        </div>
        </div>
  )
}
