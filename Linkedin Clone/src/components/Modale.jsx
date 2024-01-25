import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';

export default function Modale() {
    const [lgShow, setLgShow] = useState(false);
  return (
    <>
        <div>
            <Button onClick={() => setLgShow(true)}>Large modal</Button>
            <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">
                Large Modal
            </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
        </Modal>
        </div>
    </>
  );
}



  