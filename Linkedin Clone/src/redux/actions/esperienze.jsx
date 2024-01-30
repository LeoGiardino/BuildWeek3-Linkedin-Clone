import axios from 'axios'
import { token } from '../../data'

const id = "6551ed02c55e7e0018f83c08";
const mio = "65b22a72913f650018d0954e";

export const getEsperienze = () => {
    return function (dispatch, getState) {
        const options = {
            method: 'GET',
            url: `https://striveschool-api.herokuapp.com/api/profile/${mio}/experiences`,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        }
        axios.request(options)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: 'GET_ESPERIENZE',
                    payload: response.data
                })
            })

    };
};

export const postEsperienze = (addExp) => {
    return function (dispatch, getState) {
        const options = {
            method: 'POST',
            url: `https://striveschool-api.herokuapp.com/api/profile/${mio}/experiences`,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: addExp
        };
        console.log('Request body:', addExp);
        axios.request(options)
            .then(response => {
                dispatch({
                    type: 'ADD_ESPERIENZE',
                    payload: response.data
                });
            })
            .catch(error => {
                console.error("Error during POST request:", error);
                console.error("Response data:", error.response ? error.response.data : 'No response data available');
                // Puoi anche dispatch un'azione di errore qui se necessario
            });
    };
};


export const putEsperienze = (addExp) => {
    return function (dispatch, getState) {
        const options = {
            method: 'PUT',
            url: `https://striveschool-api.herokuapp.com/api/profile/${mio}/experiences/${addExp._id}`,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: addExp
        };
        console.log('Request body:', addExp);
        axios.request(options)
            .then(response => {
                dispatch({
                    type: 'PUT_ESPERIENZE',
                    payload: addExp
                });
            })
            .catch(error => {
                console.error("Error during POST request:", error);
                console.error("Response data:", error.response ? error.response.data : 'No response data available');
                // Puoi anche dispatch un'azione di errore qui se necessario
            });
    };
};
export const delEsperienze = (delExp) => {
    return function (dispatch, getState) {
        const options = {
            method: 'DELETE',
            url: `https://striveschool-api.herokuapp.com/api/profile/${mio}/experiences/${delExp._id}`,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: delExp
        };
        console.log('Request body:', delExp);
        axios.request(options)
            .then(response => {
                dispatch({
                    type: 'DEL_ESPERIENZE',
                    payload: delExp  // Usa delExp invece di response.data
                });
            })
            .catch(error => {
                console.error("Error during DELETE request:", error);
                console.error("Response data:", error.response ? error.response.data : 'No response data available');
                // Puoi anche dispatch un'azione di errore qui se necessario
            });
    };
};


export const postImgEsperienze = (imageFile, id) => {
    return function (dispatch, getState) {

        // Crea un oggetto FormData per gestire l'upload del file
        const formData = new FormData();
        formData.append('experience', imageFile);

        console.log("Form data:", imageFile);
        console.log("ID:", id);

        const options = {
            method: 'POST',
            url: `https://striveschool-api.herokuapp.com/api/profile/${mio}/experiences/${id}/picture`,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: formData
        };
        // Effettua la richiesta
        axios.request(options)
            .then(response => {
                console.log(response.data);
                dispatch({
                    type: 'UPLOAD_ESPERIENZA_IMAGE',
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