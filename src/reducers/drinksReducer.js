import { createSlice } from '@reduxjs/toolkit'

export const drinksReducer = createSlice({
  name: 'drinks',
  initialState: {
    all: [],
    drinkInfo: {}
  },
  reducers: {}
})