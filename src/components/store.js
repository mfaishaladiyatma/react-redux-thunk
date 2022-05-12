import React from 'react'

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducer'

const baseUrl = 'https://basic-auth-example.herokuapp.com'


const composeEnhancers = (typeof window !== 'undefined' &&
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
compose

const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrl)))
    
    )

export default store
