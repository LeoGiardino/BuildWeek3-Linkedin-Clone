import React from 'react' 
import pencil from '../assets/pencil.svg'
import '../styles/LanguageComponent.css'
import '../styles/ColorPallette.css'

export default function LanguageComponent() {
  return (
    <div className='carta backgroundSide p-3'>
        <div className='card-header'>
            <p className='pageWhtTxt mb-0'>Lingua del profilo</p>
            {/* <img src={pencil} /> */}
            <div className='py-3 d-flex justify-content-between'>
              <button className='btn1'>Italiano</button>
              <button className='btn2'>Inglese</button>
            </div>
        </div>

        <div className='pt-3'>
          <p className='pageWhtTxt mb-0'>Public Profile & URL</p>
          <a href='# mb-0'>https://www.linkedin.com</a>
        </div>
    </div>
  )
}