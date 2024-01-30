import React from 'react'

export default function preferitiReducer(state = [], action) {
    console.log(action, state)
    switch (action.type) {
        case 'SAVE_FAVORITE':
            return [...state,action.payload]
        case "REMOVE_FAVORITE":
            return state.filter(ele => ele.company !== action.payload.company)
        default:
          break;
      }
  
      return state;
}
