import React from 'react'
import abbraccio from "../assets/abbraccio.jpg"
import { Button } from "react-bootstrap"
import "../styles/sideBar.css"



export default function PersoneSide() {
  return (
    <>
        <div className='px-3 pt-3 backgroundSide'>
            <div className='border-bottom border-secondary d-flex pb-3'>
            <div>
                <img className='imgProfilo rounded-circle me-2' src={abbraccio} />
            </div>
            <div className='text-white text-center'>
                <p className='m-0'>Nome Persona</p>
                <p className=''>mestiere</p>
                <Button className='p-1 rounded-pill' variant="outline-light"> <i class="bi bi-send-fill"></i> Messaggio</Button>
            </div>
            </div>
        </div>
    </>
  )
}
