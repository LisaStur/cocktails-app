import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { drinksReducer } from 'reducers/drinksReducer'

const DrinkSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const DrinkInfo = () => {
  const dispatch = useDispatch()
  const { drinkId } = useParams()
  const info = useSelector((store) => store.reducer.drinkInfo)

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
      .then((res) => res.json())
      .then((json) => dispatch(
        drinksReducer.actions.setInfo(json.drinks[0])
      ))
  }, [drinkId, dispatch])
  console.log(info)

  return (
    <DrinkSection>
      <h2>{info.strDrink}</h2>
      <img src={info.strDrinkThumb} alt={info.strDrink} />
      <p>{info.strInstructions}</p>
      <p>{info.strIngredient1}{info.strMeasure1}</p>
      <p>{info.strIngredient2}{info.strMeasure2}</p>
      <p>{info.strIngredient3}{info.strMeasure3}</p>
      <p>{info.strIngredient4}{info.strMeasure4}</p>
      <p>{info.strIngredient5}{info.strMeasure5}</p>
      <p>{info.strIngredient6}{info.strMeasure6}</p>
      <p>{info.strIngredient7}{info.strMeasure7}</p>
      <p>{info.strIngredient8}{info.strMeasure8}</p>
      <p>{info.strIngredient9}{info.strMeasure9}</p>
      <p>{info.strIngredient10}{info.strMeasure10}</p>
      <p>{info.strIngredient11}{info.strMeasure11}</p>
      <p>{info.strIngredient12}{info.strMeasure12}</p>
      <p>{info.strIngredient13}{info.strMeasure13}</p>
      <p>{info.strIngredient14}{info.strMeasure14}</p>
      <p>{info.strIngredient15}{info.strMeasure15}</p>
    </DrinkSection>
  )
}