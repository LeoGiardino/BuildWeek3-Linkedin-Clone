import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import PersoneSide from './PersoneSide';

export default function Modale() {
    const [lgShow, setLgShow] = useState(false);
  return (
    <>
        <div>
            <Button className='w-100 border-none' variant="dark" onClick={() => setLgShow(true)}>Large modal</Button>
            <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header className='bg-dark text-white' closeButton>
            <Modal.Title className='bg-dark text-white'  id="example-modal-sizes-title-lg">
                Titolo
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'><PersoneSide/></Modal.Body>
        </Modal>
        </div>
    </>
  );
}



  