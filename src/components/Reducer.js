import React from 'react'
import action from './action'

const initialState = {
    username:'',
    password:'',
    loading: false,
    error: ''
}

export default function reducer(state = initialState, action) {
  
    const { type, payload } = action

    switch(type){
        case 'fetch-start':
            return{
                ...state,
                loading:true
            }
        case 'fetch-success':
            return{
                ...state,
                loading: false,

            }
        case 'fetch-failed':
            return{
                ...state,
                loading: false,
                error: payload
            }
            default:
                return state
    }
}
