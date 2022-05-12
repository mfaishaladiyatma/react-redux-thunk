import React from 'react'

import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './Reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ || compose

const baseUrl = 'https://basic-auth-example.herokuapp.com'


const store = createStore(reducer,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(baseUrl)))
    )

export default store
