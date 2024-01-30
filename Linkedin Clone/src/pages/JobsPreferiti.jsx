import React, { useEffect, useState } from 'react'
import { Card, Container } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

import "../styles/JobsStyle/Jobs.css"
import "../styles/CentroProfile.css"
import LavoriPref from '../components/jobsComponents/LavoriPref'

export default function JobsPreferiti() {
    const preferiti = useSelector(state => state.listaPreferiti)
    console.log(preferiti)

    //const [aggiornamento, setAggiornamento]=useState(true)

    // useEffect(()=>{
     
    // },[])

    //console.log(aggiornamento)

  return (
    <>
        <Container className='w-75'>
            <Card className='compBackgroundForm'>
                <Card.Body className='d-flex flex-column pb-0' >
                    <div className='d-flex flex-column justify-content-between mb-4'>
                        <h5>Preferiti</h5>
                    </div>
                     {preferiti.map((lav,index) => <LavoriPref  key={index} company = {lav.company} location = {lav.location} published = {lav.published} titolo = {lav.titolo} />)}                    
                </Card.Body>
                <Card.Footer className='text-center risorseFooter'>Mostra tutto <ArrowRight /></Card.Footer>

            </Card>
        </Container>
    </>
  )
}
