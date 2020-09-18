import { createSlice } from '@reduxjs/toolkit'

export const drinkReducer = createSlice({
  name: 'drinks',
  initialState: {
    all: [],
    drinkInfo: {}
  },
  reducers: {}
})