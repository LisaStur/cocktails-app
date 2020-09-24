import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { drinksReducer } from 'reducers/drinksReducer'

const DrinkLink = styled(Link)`
  text-decoration: none;
`
const ListSection = styled.section`
  display: flex;
  flex-flow: row wrap;
`
const DrinkCard = styled.div`
  display: flex;
  width: 90%;
  margin: 5% 5% 0 5%;

  @media (min-width: 668px) {
    width: 46%;
    margin: 5% 2% 0 2%;
  }
  @media (min-width: 1024px) {
    width: 23%;
    margin: 5% 1% 0 1%;
  }
`
const DrinkThumb = styled.img`
  width: 100%;
`
const DrinkName = styled.h2`
  font-size: 24px;
  color: black;
  text-align: center;
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
    <ListSection>
      {drinks.map((drink) => (
        <DrinkCard key={drink.idDrink}>
          <DrinkLink to={`drinks/${drink.idDrink}`}>
            <DrinkThumb src={drink.strDrinkThumb} alt={drink.strDrink} />
            <DrinkName>{drink.strDrink}</DrinkName>
          </DrinkLink>
        </DrinkCard>
      ))}
    </ListSection>

  )
}

