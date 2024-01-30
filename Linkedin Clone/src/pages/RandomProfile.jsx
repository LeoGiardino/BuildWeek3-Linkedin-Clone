import React from 'react'
import ProfiloConsultati from '../components/profiloComponents/ProfiloConsultati'
import RightProfile from '../components/profiloComponents/RightProfile'
import CentroProfileRandom from '../components/profiloComponents/CentroProfileRandom'


export default function RandomProfile() {
  
  return (
    <div className='d-flex container p-4 principale' style={{ maxWidth: '1128px' }}>

                <CentroProfileRandom />
                <RightProfile />
            </div>

  )
}
