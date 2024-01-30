import React, { useEffect } from 'react'
import '../../styles/CentroProfile.css'
import '../../styles/ColorPallette.css'
import PrimoBox from './PrimoBox'
import AnalisiComp from './AnalisiComp'
import RisorseComp from './RisorseComp'
import ProfiloConsultati from './ProfiloConsultati'
import EspAmico from './EspAmico'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import EsperienzeAmico from '../../redux/actions/EsperienzeAmico'
import { useParams } from 'react-router-dom'
import AttivitaComp from './AttivitaComp'

export default function CentroProfileRandom() {

  const dispatch = useDispatch()

  const {id} = useParams()
  console.log(id)

  useEffect(()=>{
    dispatch(EsperienzeAmico(id))
  })

  const exper = useSelector(state=>state.expAmico)
  console.log(exper)

  return (
    <>
      <div className='centro me-3' style={{ width: '100%' }}>
        
        <ProfiloConsultati/>
        <Card className='compBackgroundExp'>
                <Card.Body className='d-flex flex-column' >
                    <div className='d-flex justify-content-between mb-4'>
                        <h5>Esperienza</h5>
                    </div>
                    {exper.map((exp)=><EspAmico professione={exp.role} azienda={exp.company} periodo={exp.endDate} descrizione={exp.description} img={exp.image} area={exp.area}/>)}
                </Card.Body>
        </Card>    
      </div>
    </>

  )
}