import React from 'react'
import ProfiloConsultati from '../components/ProfiloConsultati'
import RightProfile from '../components/RightProfile'
import CentroProfileRandom from '../components/CentroProfileRandom'


export default function RandomProfile() {
  return (
    <div className='d-flex w-100 container p-4 principale'>

                <CentroProfileRandom />
                <RightProfile />
            </div>

  )
}
