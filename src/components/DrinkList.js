import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { fetchDrinks } from 'reducers/drinksReducer'

const ListPage = styled.section`
  display: flex;
  flex-direction: column;
`
const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 668px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
  `
const Header = styled.h1`
  font-family: 'Merienda', cursive;
  font-size: 52px;
  text-align: center;
  `
const SelectType = styled.select`
  font-size:18px;
  height: 32px;
  border-radius: 8px;
`
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
  transition: 0.5s;
  position: relative;
  text-align: center;
  color: white;

  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: 668px) {
    width: 46%;
    margin: 3% 2% 0 2%;
  }
  @media (min-width: 1024px) {
    width: 23%;
    margin: 2% 1% 0 1%;
  }
`
const DrinkThumb = styled.img`
  width: 100%;
  border-radius: 8px;
`
const DrinkName = styled.h2`
  font-family: 'Merienda', cursive;
  font-size: 24px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  text-shadow: 4px 4px 8px black;
  opacity: 40%;
  transition: 1s;

  ${DrinkCard}:hover &{
    opacity: 100%;
  }
`

export const DrinkList = () => {
  const dispatch = useDispatch()
  const drinks = useSelector((store) => store.reducer.all)
  const [drinkType, setDrinkType] = useState('champagne')

  useEffect(() => {
    dispatch(fetchDrinks(drinkType))
  }, [dispatch, drinkType])

  return (
    <ListPage>
      <HeaderSection>
        <Header>Cocktail O&#39;Clock!</Header>
        <SelectType onChange={(e) => setDrinkType(e.target.value)} value={drinkType}>
          <option value="champagne">Champagne</option>
          <option value="wine">Wine</option>
          <option value="rum">Rum</option>
          <option value="gin">Gin</option>
          <option value="vodka">Vodka</option>
          <option value="whiskey">Whiskey</option>
          <option value="brandy">Brandy</option>
          <option value="cognac">Cognac</option>
          <option value="kahlua">Kahlua</option>
          <option value="cointreau">Cointreau</option>
          <option value="beer">Beer</option>
        </SelectType>
      </HeaderSection>
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
    </ListPage>
  )
}
