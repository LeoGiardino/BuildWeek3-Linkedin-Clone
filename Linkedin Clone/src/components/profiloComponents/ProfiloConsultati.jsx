import React, { useEffect } from 'react';
import '../../styles/ProfiloConsultati.css';
import '../../styles/ColorPallette.css';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap-icons/font/bootstrap-icons.css';
import pen from '../../assets/free_icon.svg'
import {useParams} from "react-router-dom"
import getAmico from '../../redux/actions/getAmico';

export default function ProfiloConsultati() {
    const state = useSelector(state => state.amico);
    console.log(state);
    
    const {id} = useParams()
    console.log(id)

    const dispatch= useDispatch()
    useEffect(()=>{
        dispatch(getAmico(id))
    },[id])

    if (!state ) {
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
                <div className='immagineP2'><img className='imgAmico rounded-circle' src={state.image}  /></div>
                
                
            </div>
            <div className='d-flex p-3 pb-0 infoCont'>
                
                {state &&  (
                    <>
                        <div className='informazioni pt-5'>
                            <h4 className='pageWhtTxt mb-1 d-flex align-items-center'>
                                <span className='pageWhtTxt me-1'>{state.name}</span>
                                <span className='pageWhtTxt me-2'>{state.surname}</span>
                                <span className='verifica ms-1'>
                                    <i className='bi bi-shield-check'></i> Inizia la verifica
                                </span>
                            </h4>
                            <p className='pageWhtTxt mb-2'>{state.title}</p>
                            <p className='pageGrayTxt mb-2 fsize-small'>
                                {state.area}
                                <span className='ms-2'>
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