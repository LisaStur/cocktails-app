import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { fetchInfo } from 'reducers/drinksReducer'

const DrinkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5%;

  @media (min-width: 668px) {
    flex-direction: row;
  }
`
const DrinkNameSmallScreen = styled.h2`
  font-family: 'Merienda', cursive;
  font-size: 32px;  
  padding-bottom: 3%;
  text-align  : center;
    
  @media (min-width: 668px) {
    display: none;
  }
`
const DrinkImage = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 668px) {
    width: 50%;
  }
`
const DrinkNameBigScreen = styled.div`
  font-family: 'Merienda', cursive;
  font-size: 32px;  
  padding-bottom: 3%;
  display: none;

  @media (min-width: 668px) {
    display: flex;
  }  
`
const BigScreenContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-left: 5%;
`
const Instructions = styled.p`
  display: flex;
  font-size: 24px;
`
const Ingredients = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const Ingredient = styled.p`
  font-size: 18px;
  padding-right: 10%;
  margin-block-start: 0;
  margin-block-end: 0; 
`

export const DrinkInfo = () => {
  const dispatch = useDispatch()
  const { drinkId } = useParams()
  const info = useSelector((store) => store.reducer.drinkInfo)

  useEffect(() => {
    dispatch(fetchInfo(drinkId))
  }, [dispatch, drinkId])

  return (
    <DrinkSection>
      <DrinkNameSmallScreen>{info.strDrink}</DrinkNameSmallScreen>
      <DrinkImage src={info.strDrinkThumb} alt={info.strDrink} />
      <BigScreenContainer>
        <DrinkNameBigScreen>{info.strDrink}</DrinkNameBigScreen>
        <Instructions>{info.strInstructions}</Instructions>
        <Ingredients>
          <Ingredient>{info.strIngredient1}</Ingredient>
          <Ingredient>{info.strMeasure1}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient2}</Ingredient>
          <Ingredient>{info.strMeasure2}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient3}</Ingredient>
          <Ingredient>{info.strMeasure3}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient4}</Ingredient>
          <Ingredient>{info.strMeasure4}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient5}</Ingredient>
          <Ingredient>{info.strMeasure5}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient6}</Ingredient>
          <Ingredient>{info.strMeasure6}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient7}</Ingredient>
          <Ingredient>{info.strMeasure7}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient8}</Ingredient>
          <Ingredient>{info.strMeasure8}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient9}</Ingredient>
          <Ingredient>{info.strMeasure9}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient10}</Ingredient>
          <Ingredient>{info.strMeasure10}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient11}</Ingredient>
          <Ingredient>{info.strMeasure11}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient12}</Ingredient>
          <Ingredient>{info.strMeasure12}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient13}</Ingredient>
          <Ingredient>{info.strMeasure13}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient14}</Ingredient>
          <Ingredient>{info.strMeasure14}</Ingredient>
        </Ingredients>
        <Ingredients>
          <Ingredient>{info.strIngredient15}</Ingredient>
          <Ingredient>{info.strMeasure15}</Ingredient>
        </Ingredients>
      </BigScreenContainer>
    </DrinkSection>
  )
}