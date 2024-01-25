import React from 'react'
import '../styles/RightProfile.css'
import LearningComponent from './LearningComponent'
import LanguageComponent from './LanguageComponent'

export default function RightProfile() {
  return (
    <div className='destra'>
        <LanguageComponent />
        <LearningComponent/>
    </div>
  )
}
