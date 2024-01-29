import React from 'react'

export default function listaLavoriReducer(state = [], action) {
    // console.log(action)
  switch(action.type) {
    case 'GET_LAVORI':
        return action.payload.data;
        default: break
  }
  return state
}
