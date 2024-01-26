import React from 'react'
import abbraccio from "../assets/abbraccio.jpg"
import { Button } from "react-bootstrap"
import "../styles/sideBar.css"
import { useNavigate } from 'react-router-dom'



export default function PersoneSide({dati, modal}) {
  //console.log(dati)
  const navigate = useNavigate()
  return (
    <>
        <div className='px-3 pt-3 backgroundSide mx-1'>
            <div onClick={()=> {navigate("/"+ dati._id);modal(false);window.scrollTo(0,0)}} className='border-bottom border-secondary d-flex pb-3 cursore'>
            <div>
                <img className='imgProfilo rounded-circle me-2' src={dati.image} />
            </div>
            <div className='text-white '>
                <p className='m-0'>{dati.name} {dati.surname}</p>
                <p className='visualizzazioni'>{dati.title}</p>
                <Button className='p-1 rounded-pill' variant="outline-light"> <i class="bi bi-send-fill"></i> Messaggio</Button>
            </div>
            </div>
        </div>
    </>
  )
}
