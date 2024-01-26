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
            console.log(response.data);
            dispatch({
                type: 'GET_PROFILE',
                payload: response.data
            })
        })

    };
  };

// In profiles.js

export const putProfile = (updatedProfile) => {
    return function (dispatch, getState) {
        const options = {
            method: 'PUT',
            url: 'https://striveschool-api.herokuapp.com/api/profile/',
            headers :{
                'Authorization': 'Bearer ' + token
            },
            data: updatedProfile  // Aggiungi l'oggetto modificato come corpo della richiesta
        };

        axios.request(options)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'PUT_PROFILE',
                payload: response.data
            });
        })
        .catch(error => {
            console.error("Error during PUT request:", error);
            // Gestisci l'errore in modo appropriato, ad esempio inviando un'azione di errore
            // dispatch({ type: 'PUT_PROFILE_ERROR', payload: error.message });
        });
    };
};
