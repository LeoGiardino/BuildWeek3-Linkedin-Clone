import React from 'react'
import '../styles/CentroProfile.css'
import '../styles/ColorPallette.css'
import PrimoBox from './PrimoBox'
import AnalisiComp from './AnalisiComp'
import RisorseComp from './RisorseComp'
import ProfiloConsultati from './ProfiloConsultati'

export default function CentroProfileRandom() {
  return (
    <>

      <div className='centro me-3' style={{ width: '100%' }}>
        
        <ProfiloConsultati/>
          <AnalisiComp />
        <RisorseComp />
      </div>
    </>

  )
}