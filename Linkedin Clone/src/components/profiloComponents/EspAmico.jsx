import React from 'react'
import { Card } from 'react-bootstrap'
import { PlusLg } from 'react-bootstrap-icons'

export default function EspAmico({professione, azienda, periodo, descrizione, img, area}) {
  return (
    <>                      
                            <div className='d-flex justify-content-between flex-column align-items-start expRow'>
                                <div className='d-flex justify-content-between align-items-start '>
                                    <div className='imgAzienda'>
                                        <img style={{ width: '100%' }} name='companyLogo' src={img}></img>
                                    </div>
                                    <div className='d-flex flex-column'>
                                        <span className='professione' name='role'>{professione}</span>
                                        <span className='azienda' name='company'>{azienda}</span>
                                        <span className='periodo' name='startDate'>{periodo}</span>
                                        <span className='periodo' name='area'> {area} </span>
                                        <span className='descrizione' name='description'>{descrizione}</span>   
                                    </div>
                                </div>

                            </div>          
    </>
  )
}
