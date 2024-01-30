import React from 'react'
import { Card, Form } from 'react-bootstrap'
import '../../styles/HomeStyle/Home.css'
import multimedia from '../../assets/multimedia.png'
import evento from '../../assets/evento.png'
import articolo from '../../assets/articolo.png'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Calendar3, CaretDownFill, Clock, EmojiSmile, Image, PatchMinusFill, ThreeDots } from 'react-bootstrap-icons'

export default function AggiuntaPostComp() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <Card>
                <Card.Body className='pb-0'>
                    <div className='d-flex align-items-center justify-content-between avvioPost'>
                        <img className='rounded-circle me-2 propicHomeC' src='https://picsum.photos/40' />
                        <button className='w-100 nostroBtnHome fw-bold' onClick={handleShow}>Avvia un post</button>
                    </div>

                    <div className='d-flex align-items-center justify-content-between mt-2 tipiPost'>
                        <div className='ps-0' style={{ fontSize: '12px' }}>
                            <img className='postLogo mb-1' src={multimedia} />
                            <span className='fw-bold'>Contenuti multimediali</span>
                        </div>

                        <div className='ps-0' style={{ fontSize: '12px' }}>
                            <img className='postLogo' src={evento} />
                            <span className='fw-bold'>Evento</span>
                        </div>

                        <div className='ps-0' style={{ fontSize: '12px' }}>
                            <img className='postLogo' src={articolo} />
                            <span className='fw-bold'>Scrivi un articolo</span>
                        </div>

                    </div>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='d-flex align-items-center headerModale'>
                            <img className='rounded-circle me-2 propicHomeC' src='https://picsum.photos/40' />
                            <div className='d-flex flex-column profiloModalePost'>
                                <span className='fw-bold'>Nome utente <CaretDownFill className='iconcine' /></span>
                                <span className='sottotitoloMod'>Pubblica: Chiunque</span>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='pt-0'>
                    <div className='d-flex flex-column align-items-start justify-content-between'>
                        <Form.Control type="text" placeholder="Di cosa vorresti parlare?" className='mioTextInput' />
                        <EmojiSmile className='iconcine ms-3 fs-5' />

                        <div className='iconeAggiunte d-flex align-items-center mt-2'>
                            <div className=''>
                                <Image className='iconcine2 bg-dark' />
                            </div>
                            <div>
                                <Calendar3 className='iconcine2' />
                            </div>
                            <div>
                                <PatchMinusFill className='iconcine2' />
                            </div>
                            <div>
                                <ThreeDots className='iconcine2' />
                            </div>

                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Clock className='iconcine me-2 fs-5' />
                    <button className='pubblicaBtn' variant="primary" onClick={handleClose}>
                        Pubblica
                    </button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
