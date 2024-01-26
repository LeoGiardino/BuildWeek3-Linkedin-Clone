import React from 'react'
import axios from 'axios'
import {token} from '../../data'

export default function getAmico(id) {
    return function (dispatch, getState) {
        const options = {
            method: 'GET',
            url: 'https://striveschool-api.herokuapp.com/api/profile/'+ id,
            headers :{
                'Authorization': 'Bearer ' + token
            } 
        }
        axios.request(options)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'GET_AMICO',
                payload: response.data
            })
        })

    };
    
  
}
