import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions/profiles'

export default function BodyProfile() {

   const dispatch = useDispatch();

   useEffect(() => {
       dispatch(getProfile())
   },[])

   const state = useSelector(state => state.profili)
   console.log(state);

  return (
    <>

    </>
  )
}
