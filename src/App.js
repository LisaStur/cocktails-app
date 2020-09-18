import React from 'react'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from '@reduxjs/toolkit'
import { drinksReducer } from 'reducers/drinksReducer'
import { Home } from 'pages/Home'

const reducers = combineReducers(drinkReducer)

const store = createStore(reducers)

export const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}
