import React from 'react'
import '../styles/RightProfile.css'
import LearningComponent from './LearningComponent'
import LanguageComponent from './LanguageComponent'
import PersoneSide from './PersoneSide'
import Modale from './Modale'

export default function RightProfile() {
  return (
    <div className='destra d-none d-lg-block'>
        <LanguageComponent />
        <LearningComponent/>
        <PersoneSide/>
        <Modale/>
    </div>
  )
}
