import { createSlice } from '@reduxjs/toolkit'

export const drinksReducer = createSlice({
  name: 'drinksReducer',
  initialState: {
    all: [],
    drinkType: {},
    drinkInfo: {}
  },
  reducers: {
    setDrinks: (state, action) => {
      state.all = action.payload
    },
    setType: (state, action) => {
      state.drinkType = action.payload
    },
    setInfo: (state, action) => {
      state.drinkInfo = action.payload
    }
  }
})

export const fetchDrinks = (drinkType) => {
  const DRINKS_URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${drinkType}`
  return (dispatch) => {
    fetch(DRINKS_URL)
      .then((res) => res.json())
      .then((json) => dispatch(drinksReducer.actions.setDrinks(json.drinks)))
  }
}

export const fetchInfo = (drinkId) => {
  const DRINKINFO_URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
  return (dispatch) => {
    fetch(DRINKINFO_URL)
      .then((res) => res.json())
      .then((json) => dispatch(drinksReducer.actions.setInfo(json.drinks[0])))
  }
}