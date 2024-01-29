import axios from 'axios'

import {token} from '../../data'



const mio = "65b22a72913f650018d0954e";

export const getPosts  = () => {
    return function (dispatch, getState) {
        const options = {
            method: 'GET',
            url: 'https://striveschool-api.herokuapp.com/api/posts/',
            headers :{
                'Authorization': 'Bearer ' + token
            } 



        }
        axios.request(options)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'GET_POSTS',
                payload: response.data
            })
        })

    };
  };

  export const addPosts  = (poster) => {
    return function (dispatch, getState) {
        console.log(poster);
        const options = {
            method: 'POST',
            url: 'https://striveschool-api.herokuapp.com/api/posts/',
            headers :{
                'Authorization': 'Bearer ' + token
            }, 
            data : poster
        }
        axios.request(options)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'ADD_POST',
                payload: response.data
            })
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
export const deletePost = (delPost) => {
    return function (dispatch, getState) {
        const options = {
            method: 'DELETE',
            url: `https://striveschool-api.herokuapp.com/api/posts/${delPost}`,
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: delPost
        };
        console.log('Request body:', delPost);
        axios.request(options)
            .then(response => {
                dispatch({
                    type: 'DEL_POST',
                    payload: delPost  // Usa delExp invece di response.data
                });
            })
            .catch(error => {
                console.error("Error during DELETE request:", error);
                console.error("Response data:", error.response ? error.response.data : 'No response data available');
                // Puoi anche dispatch un'azione di errore qui se necessario
            });
    };
};


