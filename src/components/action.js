import axios from 'axios'
import React from 'react'

const fetchPostStart = {
    type: 'fetch-start'
}

const fetchPostSuccess = (payload) => ({
    type: 'fetch-success',
    payload
})

const fetchPostFailed = (payload) => ({
    type: 'fetch-failed',
    payload
})

const fetchPostAsync = (username, password) => {
    return function(dispatch, getState, baseUrl){
        baseUrl = 'https://basic-auth-example.herokuapp.com/users/authenticate'
        dispatch(fetchPostStart)
        axios.post(baseUrl, {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response.data)
            dispatch(fetchPostSuccess(response.data))
        })
        .catch((error) => {
            dispatch(fetchPostFailed(error))
        })
    }
}

export{
    fetchPostStart,
    fetchPostFailed,
    fetchPostAsync,
    fetchPostSuccess
}