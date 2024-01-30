import axios from 'axios'

export const Lavori = () => {
    return function (dispatch, getState) {
        const options = {
            method: 'GET',
            url: 'https://strive-benchmark.herokuapp.com/api/jobs'
        }
        axios.request(options)
        .then(response => {
            // console.log(response.data);
            dispatch({
                type: 'GET_LAVORI',
                payload: response.data
            })
        })

    };
  };