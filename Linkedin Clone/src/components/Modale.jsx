import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';
import PersoneSide from './PersoneSide';

export default function Modale({persone}) {
    const [lgShow, setLgShow] = useState(false);
    console.log(persone.slice( 10,20))
  return (
    <>
        <div>
            <Button className='w-100 ' variant="dark" onClick={() => setLgShow(true)}>Mostra tutti</Button>
            <Modal
            size="lg"
            show={lgShow}
            onHide={() => setLgShow(false)}
            aria-labelledby="example-modal-sizes-title-lg">
            <Modal.Header className='bg-dark text-white' closeButton>
            <Modal.Title className='bg-dark text-white'  id="example-modal-sizes-title-lg">
                Altri profili consultati
            </Modal.Title>
            </Modal.Header>
            <Modal.Body className='bg-dark text-white'>
              {persone && persone.slice( 10,20).filter(e=> e.name && e.title !== "" ).map((profilo,indice)=><PersoneSide key={indice} dati={profilo}/>)}
              </Modal.Body>
        </Modal>
        </div>
    </>
  );
}



  