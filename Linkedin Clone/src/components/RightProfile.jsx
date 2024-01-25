import React from 'react'
import '../styles/RightProfile.css'
import LearningComponent from './LearningComponent'
import PersoneSide from './PersoneSide'
import Modale from './Modale'

export default function RightProfile() {
  return (
    <div className='destra'>
        <LearningComponent/>
        <PersoneSide/>
        <Modale/>
    </div>
  )
}
