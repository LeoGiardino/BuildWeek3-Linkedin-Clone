import axios from 'axios'
import {token} from '../../data'

export const getProfile = () => {
    return function (dispatch, getState) {
        const options = {
            method: 'GET',
            url: 'https://striveschool-api.herokuapp.com/api/profile/me',
            headers :{
                'Authorization': 'Bearer ' + token
            } 
        }
        axios.request(options)
        .then(response => {
            dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            })
        })

    };
  };