import React from 'react'
import { Card, Container } from 'react-bootstrap'
import { ArrowRight } from 'react-bootstrap-icons'
import { useSelector } from 'react-redux'

export default function JobsPreferiti() {
    const preferiti = useSelector(state => state.preferiti)
    console.log(preferiti)
  return (
    <>
        <Container className='w-75'>
            <Card className='compBackgroundForm'>
                <Card.Body className='d-flex flex-column pb-0' >
                    <div className='d-flex flex-column justify-content-between mb-4'>
                        <h5>Preferiti</h5>

                    </div>

                    {/* {risultati.slice(0, 5).map(lav => <LavoroCard key= {lav._id} company = {lav.company_name} location = {lav.candidate_required_location} published = {lav.publication_date} titolo = {lav.title} />)} */}
                    

                </Card.Body>
                <Card.Footer className='text-center risorseFooter'>Mostra tutto <ArrowRight /></Card.Footer>

            </Card>
        </Container>
    </>
  )
}
