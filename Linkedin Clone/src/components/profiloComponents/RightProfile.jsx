import React, { useEffect } from 'react'
import '../../styles/RightProfile.css'
import LearningComponent from './LearningComponent'
import LanguageComponent from './LanguageComponent'
import PersoneSide from './PersoneSide'
import Modale from './Modale'
import "../../styles/sideBar.css"
import { useDispatch, useSelector } from 'react-redux';
import { getListaProfili } from '../../redux/actions/getListaProfili'





export default function RightProfile() {

  const dispatch= useDispatch()
  const profili = useSelector(state=>state.listaProfili)

  useEffect(()=>{
    dispatch(getListaProfili())
  },[])

  //console.log(profili.listaProfili)
  return (
    <div className='destra d-none d-lg-block'>
        <LanguageComponent />
        <div className='rounded-3 my-2 backgroundSide pt-1'>
          <p className='text-white ms-4 mb-0 mt-3'>Altri profili consultati</p>
            <div onClick={()=>window.scrollTo(0,0)}>
                {profili.listaProfili && profili.listaProfili.slice( 0,10).filter(e=> e.name && e.title !== "" ).map((profilo,indice)=><PersoneSide key={indice} dati={profilo}/>)}
            </div>
          {profili.listaProfili && <Modale persone={profili.listaProfili}/>}
        </div>
        
        <LearningComponent/>
    </div>
  )
}
