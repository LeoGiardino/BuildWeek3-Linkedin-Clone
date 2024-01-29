import React from 'react'
import { token } from '../../data';
import axios from 'axios';

export const SearchLavori = (JobName) => {
    return function (dispatch, getState) {
        const options = {
            method: 'GET',
            url: "https://strive-benchmark.herokuapp.com/api/jobs?search=" + JobName,
            headers :{
                'Authorization': 'Bearer ' + token
            } 
        }
        axios.request(options)
        .then(response => {
            console.log(response.data);
            dispatch({
                type: 'GET_SEARCH_LAVORI',
                payload: response.data
            })
        })

    };
  };
