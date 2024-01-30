import React from 'react'
import { token } from '../../data';
import axios from 'axios';

export default function EsperienzeAmico(idAmico) {
   return function (dispatch, getState) {
    const options = {
        method: 'GET',
        url: `https://striveschool-api.herokuapp.com/api/profile/${idAmico}/experiences` ,
        headers :{
            'Authorization': 'Bearer ' + token
        } 
    }
    axios.request(options)
    .then(response => {
        console.log(response.data);
        dispatch({
            type: 'ESPERIENZE_FRIEND',
            payload: response.data
        })
    })

};
}
