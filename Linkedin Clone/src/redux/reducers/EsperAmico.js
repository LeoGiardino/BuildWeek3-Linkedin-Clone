import React from 'react'

export default function EsperAmico(state = [], action) {
    switch (action.type) {
        case 'ESPERIENZE_FRIEND':
            return [...action.payload]
        default:
          break;
      }
  
      return state;
}
