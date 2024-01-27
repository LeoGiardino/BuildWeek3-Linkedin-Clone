import { Card } from 'react-bootstrap'
import { PlusLg } from 'react-bootstrap-icons'
import '../styles/EsperienzaComp.css'
import { useDispatch, useSelector } from 'react-redux'
import { getEsperienze, postEsperienze, putEsperienze, delEsperienze } from '../redux/actions/esperienze'
import { useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function EsperienzaComp() {

    const [lgShow, setLgShow] = useState(false);

    const [lgShow2, setLgShow2] = useState(false);

    const esperienze = useSelector(state => state?.esperienze?.esperienze)

    const dispatch = useDispatch();



    console.log(esperienze);

    const [form, setForm] = useState({
        company: '',
        role: '',
        description: '',
        area: '',
        startDate: '',
        endDate: null,
        _id: esperienze?._id
    })

    const [form2, setForm2] = useState({
        company: '',
        role: '',
        description: '',
        area: '',
        startDate: '',
        endDate: null,
        _id: esperienze?._id
    })

    useEffect(() => {
        dispatch(getEsperienze())
    }, [lgShow2])
    
    const putHandle = (esperienze) => {
        setForm2({
            company: esperienze.company,
            role: esperienze.role,
            description: esperienze.description,
            area: esperienze.area,
            startDate: esperienze.startDate,
            _id: esperienze._id
        })
        setLgShow2(true);
        console.log(form2);
    }

    const handleInputChange = (e) => {
        console.log("Input changed:", e.target.name, e.target.value);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handlePutChange = (e) => {
        console.log("Input changed 22:", e.target.name, e.target.value);
        setForm2({
            ...form2,
            [e.target.name]: e.target.value
        })
    }


    return (
        <>
            <Card className='compBackgroundExp'>
                <Card.Body className='d-flex flex-column' >
                    <div className='d-flex justify-content-between mb-4'>
                        <h5>Esperienza</h5>
                        <div className='d-flex justify-content-between'>
                            <PlusLg className='addPlusExp' onClick={() => setLgShow(true)} />
                            <img className="infoPenExp" src="/src/assets/free_icon.svg" alt="" />
                        </div>
                    </div>


                    {/* PARTE DINAMICA DA RICREARE CON LA CHIAMATA API */}
                    {esperienze && esperienze.length > 0 &&
                        esperienze.map((esperienza) => (
                            <div className='d-flex justify-content-between flex-column align-items-start expRow' key={esperienza._id}>
                                <div className='d-flex justify-content-end align-items-start w-100'><img onClick={() => putHandle(esperienza)} className="infoPenExp justify-self-end" src="/src/assets/free_icon.svg" alt="" /></div>
                                <div className='d-flex justify-content-between align-items-start '>
                                    <div className='imgAzienda'>
                                        <img style={{ width: '100%' }} name='companyLogo' src={esperienza.image}></img>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <span className='professione' name='role'>{esperienza.role}</span>
                                        <span className='azienda' name='company'>{esperienza.company}</span>
                                        <span className='periodo' name='startDate'>{esperienza.startDate}</span>
                                        <span className='periodo' name='area'>{esperienza.area} </span>
                                        <span className='descrizione' name='description'>{esperienza.description}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </Card.Body>
            </Card>

            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Modifica presentazione
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <span>* Indica che è obbligatorio</span>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Ruolo*</Form.Label>
                            <Form.Control className='input' type="text" name='role' onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Azienda*</Form.Label>
                            <Form.Control className='input' type="text" name='company' onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Località</Form.Label>
                            <Form.Control className='input' type="text" name='area' onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Descrizione*</Form.Label>
                            <Form.Control className='input' type="text" name='description' onChange={handleInputChange} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Data*</Form.Label>
                            <Form.Control className='input' type="text" name='startDate' onChange={handleInputChange} />
                        </Form.Group>

                    </Form>
                    <Button className='float-end' onClick={() => { dispatch(postEsperienze(form)); setLgShow(false) }}>Salva</Button>
                </Modal.Body>
            </Modal>

            {lgShow2 && (

                <Modal
                    size="lg"
                    show={lgShow2}
                    onHide={() => setLgShow2(false)}
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Modifica presentazione
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <span>* Indica che è obbligatorio</span>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Ruolo*</Form.Label>
                                <Form.Control className='input' type="text" value={form2.role} name='role' onChange={handlePutChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Azienda*</Form.Label>
                                <Form.Control className='input' type="text" value={form2.company} name='company' onChange={handlePutChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Località</Form.Label>
                                <Form.Control className='input' type="text" value={form2.area} name='area' onChange={handlePutChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Descrizione*</Form.Label>
                                <Form.Control className='input' type="text" value={form2.description} name='description' onChange={handlePutChange} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Data*</Form.Label>
                                <Form.Control className='input' type="text" value={form2.startDate} name='startDate' onChange={handlePutChange} />
                            </Form.Group>

                        </Form>
                        <Button onClick={() => { dispatch(delEsperienze(form2)); setLgShow2(false) }}>Elimina</Button>
                        <Button className='float-end' onClick={() => { dispatch(putEsperienze(form2)); setLgShow2(false) }}>Salva</Button>
                    </Modal.Body>
                </Modal>
            )}
        </>
    )
}
