import React from 'react'
import { Card } from 'react-bootstrap'
import '../../styles/JobsStyle/Jobs.css'
import { Search, XLg } from 'react-bootstrap-icons'

export default function OfferteComp() {
    return (

        <Card>
            <Card.Body className='leftLinkJobs fw-bold'>
                <div className='d-flex align-items-center mb-3 justify-content-between'>
                    <h5>Ricerche di offerte di lavoro suggerite</h5>
                    <XLg className='iconcine' />
                </div>
                <button className='btn2 fw-bold btnblue mb-2'><Search className='me-2' /><span>marketing manager</span></button>
                <button className='btn2 fw-bold btnblue mb-2'><Search className='me-2' /><span>hr</span></button>
                <button className='btn2 fw-bold btnblue mb-2'><Search className='me-2' /><span>legal</span></button>
                <button className='btn2 fw-bold btnblue mb-2'><Search className='me-2' /><span>sales</span></button>
                <button className='btn2 fw-bold btnblue mb-2'><Search className='me-2' /><span>amazon</span></button>
                <button className='btn2 fw-bold btnblue mb-2'><Search className='me-2' /><span>google</span></button>
                <button className='btn2 fw-bold btnblue mb-2'><Search className='me-2' /><span>analyst</span></button>
            </Card.Body>
        </Card >

    )
}


