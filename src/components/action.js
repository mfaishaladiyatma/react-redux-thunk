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
        baseUrl = 'https://basic-auth-example.herokuapp.com'
        dispatch(fetchPostStart)
        axios.post(`${baseUrl}/users/authenticate`, {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response.data)
            dispatch(fetchPostSuccess({username, password}))
        })
        .catch((error) => {
            dispatch(fetchPostFailed(error))
        })
    }
}

const fetchUserDetailAsync = () => {
    return (dispatch, getState, baseUrl) => {
        const { username, password } = getState()
        console.log(username, password)

        axios.get(`$baseUrl/users`, {
            auth: {
                username,
                password
            },
            headers: {

            }
        }).then((response) => {
            console.log(response)
        })
        .catch((error) => {})
    }
}

export{
    fetchPostStart,
    fetchPostFailed,
    fetchPostAsync,
    fetchPostSuccess
}