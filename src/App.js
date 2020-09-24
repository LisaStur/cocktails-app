import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { drinksReducer } from 'reducers/drinksReducer'
import { Home } from 'pages/Home'

const reducers = combineReducers(drinksReducer)

/* eslint no-underscore-dangle:
["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__", "__REDUX_DEVTOOLS_EXTENSION__"] }] */
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
