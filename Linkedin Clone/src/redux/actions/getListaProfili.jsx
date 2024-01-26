import axios from 'axios'
import {token} from '../../data'

export const getListaProfili = () => {
    return function (dispatch, getState) {
        const options = {
            method: 'GET',
            url: 'https://striveschool-api.herokuapp.com/api/profile/',
            headers :{
                'Authorization': 'Bearer ' + token
            } 
        }
        axios.request(options)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'GET_ALL_PROFILES',
                payload: response.data
            })
        })

    };
  };