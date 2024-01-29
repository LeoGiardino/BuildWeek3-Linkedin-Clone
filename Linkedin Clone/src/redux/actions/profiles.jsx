import axios from 'axios'
import {token} from '../../data'
const mio = "65b22a72913f650018d0954e";

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

// profiles.jsx

export const uploadProfileImage = (imageFile) => {
    return function (dispatch, getState) {
      // Crea un oggetto FormData per gestire l'upload del file
      const formData = new FormData();
      formData.append('profile', imageFile);  

      console.log("Form data:", imageFile);
  
      // Configura le opzioni della richiesta
      const options = {
        method: 'POST',  // Cambiato da PUT a POST
        url: 'https://striveschool-api.herokuapp.com/api/profile/65b22a72913f650018d0954e/picture',
        headers: {
          'Authorization': 'Bearer ' + token,
          'Content-Type': 'multipart/form-data',
        },
        data: formData,
     
      };
  
      // Effettua la richiesta
      axios.request(options)
        .then(response => {
          console.log(response.data);
          dispatch({
            type: 'UPLOAD_PROFILE_IMAGE',
            payload: response.data,
          });
        })
        .catch(error => {
          console.error("Error during image upload:", error);
          // Gestisci l'errore in modo appropriato, ad esempio inviando un'azione di errore
          // dispatch({ type: 'UPLOAD_PROFILE_IMAGE_ERROR', payload: error.message });
        });
    };
  };
  