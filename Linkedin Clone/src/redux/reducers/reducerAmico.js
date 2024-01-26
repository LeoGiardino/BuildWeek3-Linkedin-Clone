import React from 'react'

export default function reducerAmico(state=[],action) {
    switch(action.type){
        case "GET_AMICO":
            return action.payload;
        default: break;
    }
  
    return state;
}
