import React from 'react';
import '../styles/PrimoBox.css';
import '../styles/ColorPallette.css';
import { useSelector } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';
import pen from '../assets/free_icon.svg'

export default function PrimoBox() {
    const state = useSelector(state => state.profili);
    console.log(state);
    
    if (!state || !state.profili) {
        return null;
    }


    return (
        <div className='primoBox compBackground'>
            <div className='banner'>
                <img
                    className='imgBanner'
                    src='https://media.licdn.com/dms/image/C4E16AQGJAgsZMcUGcw/profile-displaybackgroundimage-shrink_350_1400/0/1646321291738?e=1711584000&v=beta&t=S6CGjbsodn1yzBo9nvtq7vtii1_9Gm2mA_uVNy4kSiI'
                    alt=''
                    style={{ width: '100%', borderTopRightRadius: '10px', borderTopLeftRadius: '10px' }}
                />
                <div className='immagineP'></div>
                <div className='penCont'>
                <img className='pen' src="https://icons.iconarchive.com/icons/iconsmind/outline/128/Pen-4-icon.png" alt=""/>
                </div>
                
            </div>
            <div className='d-flex p-3 pb-0 infoCont'>
                <img className='infoPen' src={pen} alt="" />
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
                                Indirizzo{' '}
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
    );

}

