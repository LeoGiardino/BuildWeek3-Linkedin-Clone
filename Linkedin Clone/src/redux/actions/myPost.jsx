import axios from 'axios'

import {token} from '../../data'



const mio = "65b22a72913f650018d0954e";

export const getMyPosts  = (id) => {
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

            const myPosts = response.data.filter(post => post.user._id === id);
            dispatch({
                type: 'GET_MYPOSTS',
                payload: myPosts
            })
        })

    };
  };
