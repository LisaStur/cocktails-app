import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { drinksReducer } from 'reducers/drinksReducer'

const DrinkLink = styled(Link)`
  text-decoration: none;
`

export const DrinkList = () => {
  const dispatch = useDispatch()
  const drinks = useSelector((store) => store.reducer.all)

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
      .then((res) => res.json())
      .then((json) => dispatch(drinksReducer.actions.setDrinks(json.drinks)))
  }, [dispatch])

  return (
    <div>
      {drinks.map((drink) => (
        <section key={drink.idDrink}>
          <DrinkLink to={`drinks/${drink.idDrink}`}>
            <img src={`${drink.strDrinkThumb}/preview`} alt={drink.strDrink} />
            <h2>{drink.strDrink}</h2>
          </DrinkLink>
        </section>
      ))}
    </div>

  )
}

