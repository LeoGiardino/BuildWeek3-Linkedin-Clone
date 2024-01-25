import React from 'react'
import comunicazione from "../assets/comunicazione.jpg"
export default function LearningComponent() {
  return (
    <>
        <div className='d-flex text-white border-top border-bottom border-black pt-3'>
            <p className='w-75'>
                <img className='w-100 h-100' src={comunicazione} alt="comunicazione" />
           </p>
           <p className='ms-2 visualizzazioni'>
                <b>Comunicazione ad alto rischio</b> <br />
                <span className='text-secondary'><b>2.368 visualizzazioni </b></span>
           </p>
        </div>
    </>
  )
}
