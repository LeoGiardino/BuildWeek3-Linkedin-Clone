import React from 'react';
import '../../styles/PrimoBox.css';
import '../../styles/ColorPallette.css';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';
import pen from '../../assets/free_icon.svg'
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { getProfile, putProfile, uploadProfileImage } from '../../redux/actions/profiles';



export default function PrimoBox() {
    const state = useSelector(state => state.profili);
    console.log(state);

    const dispatch = useDispatch();


    const [form, setForm] = useState({
        name: state.profili?.name || '',
        surname: state.profili?.surname || '',
        name2: state.profili?.username || '',
        paese: '',
        cap: '',
        area: state.profili?.area || '',
    });

    useEffect(() => {
        setForm({
            name: state.profili?.name || '',
            surname: state.profili?.surname || '',
            name2: state.profili?.username || '',
            paese: '',
            cap: '',
            area: state.profili?.area ||'',
        });
    }, [state.profili]);


    useEffect(() => {
        setForm(prevForm => ({
          ...prevForm,
          image: state.profili?.image,
        }));
      }, [state.profili?.image]);

    const handleInputChange = (e) => {
        console.log("Input changed:", e.target.name, e.target.value);
        console.log("Form:", form);
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveButtonClick = () => {
        console.log("Saving profile with data:", form);
        dispatch(putProfile(form));
        setLgShow(false);
        console.log("Form inviato:", form);
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        console.log("File selected:", file);
        if (file) {
            // Carica il file utilizzando l'azione uploadProfileImage
            dispatch(uploadProfileImage(file));
        }
    };
    



    const [lgShow, setLgShow] = useState(false);

    return (
        <>
            <div className='primoBox compBackground'>
                <div className='banner'>
                    <img
                        className='imgBanner'
                        src='https://media.licdn.com/dms/image/C4E16AQGJAgsZMcUGcw/profile-displaybackgroundimage-shrink_350_1400/0/1646321291738?e=1711584000&v=beta&t=S6CGjbsodn1yzBo9nvtq7vtii1_9Gm2mA_uVNy4kSiI'
                        alt=''
                        style={{ width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}
                    />
                    <div className='immagineP'>

                    <img
                        style={{ width: '100%', borderRadius: '50%' }}
                        src={state.profili?.image}
                        alt=''
                        onClick={() => document.getElementById('imageInput').click()}
                    />
                    <input
                        type='file'
                        id='imageInput'
                        style={{ display: 'none' }}
                        onChange={handleImageChange}
                        accept='image/*'
                    />
                </div>
                    <div className='penCont'>
                        <img className='pen' src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Pen-4-icon.png" alt="" />
                    </div>

                </div>
                <div className='d-flex p-3 pb-0 infoCont'>
                    <img className='infoPen' src={pen} alt="" onClick={() => setLgShow(true)} />
                    {state.profili && state.profili && (
                        <>
                            <div className='informazioni pt-5'>
                                <h4 className='pageWhtTxt mb-1 d-flex align-items-center'>
                                    <span className='pageWhtTxt me-1'>{state.profili.name}</span>
                                    <span className='pageWhtTxt me-2'>{state.profili.surname}</span>
                                    <span className='verifica ms-1'>
                                        <i className='bi bi-shield-check'></i> Inizia la verifica
                                    </span>
                                </h4>
                                <p className='pageWhtTxt mb-2'>{state.profili.title}</p>
                                <p className='pageGrayTxt mb-2 fsize-small'>
                                    {state.profili.area}{' '}
                                    <span>
                                        <a href='' style={{ color: '#6ABAFB', textDecoration: 'none' }}>
                                            Informazioni di contatto
                                        </a>
                                    </span>
                                </p>
                                <p className='pageBlueTxt mb-0 fsize-small'>Collegamenti</p>

                            </div>
                            <div className=' rightSide d-none d-lg-block'>
                                <div className='d-flex align-items-center pt-5'>
                                    <div className='box' style={{ width: '33px', height: '33px', backgroundColor: 'red' }}></div>
                                    <span className='ms-2 pageWhtTxt'>Nome Azienda</span>
                                </div>
                            </div>


                        </>
                    )}
                </div>
                <div className='bottoniP p-4 pt-0'>
                    <button className='btn1 fw-bold'>Disponibile per</button>
                    <button className='btn2 fw-bold'>Aggiungi Sezione</button>
                    <button className='btn3 fw-bold'>Altro</button>
                </div>
            </div>

            {form && (

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
                            <Form.Label>Nome*</Form.Label>
                            <Form.Control className='input' type="text" value={form.name} name='name' onChange={handleInputChange}  />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Cognome*</Form.Label>
                            <Form.Control className='input' type="text" value={form.surname} name='surname' onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Nome aggiuntivo</Form.Label>
                            <Form.Control className='input' type="text" value={form.name2} name='name2' onChange={handleInputChange}/>
                        </Form.Group>
                        <Modal.Title id="example-modal-sizes-title-lg">
                            Località
                        </Modal.Title>
                        
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Paese/Area geografica*</Form.Label>
                            <Form.Control className='input' type="text" value={form.paese} name='paese' onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>CAP</Form.Label>
                            <Form.Control className='input' type="number" value={form.cap} name='cap' onChange={handleInputChange}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Città*</Form.Label>
                            <Form.Control className='input' type="text" value={form.area} name='area' onChange={handleInputChange}/>
                        </Form.Group>
                    </Form>
                    <Button className='float-end' onClick={handleSaveButtonClick}>Salva</Button>
                </Modal.Body>
            </Modal>
            )}

        </>

    );

}

