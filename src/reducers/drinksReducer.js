import { createSlice } from '@reduxjs/toolkit'

export const drinksReducer = createSlice({
  name: 'drinksReducer',
  initialState: {
    all: [],
    drinkInfo: {}
  },
  reducers: {
    setDrinks: (state, action) => {
      state.all = action.payload
    },
    setInfo: (state, action) => {
      state.drinkInfo = action.payload
    }
  }
})