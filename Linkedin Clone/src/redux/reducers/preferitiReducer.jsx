import React from 'react'

export default function preferitiReducer(state = [], action) {
    //console.log(action, state)
    switch (action.type) {
        case 'SAVE_FAVORITE':
            return [...state,action.payload]
        default:
          break;
      }
  
      return state;
}
