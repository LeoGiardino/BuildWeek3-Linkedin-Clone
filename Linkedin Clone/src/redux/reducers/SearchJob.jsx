import React from 'react'

export default function SearchJob(state = [], action) {

  //console.log(action)
  switch(action.type) {
    case 'GET_SEARCH_LAVORI':
        return action.payload.data;
        default: break
  }
  return state
}
