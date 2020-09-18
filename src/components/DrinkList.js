import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const DrinkList = () => {
  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
      .then(res => res.json())
      .then(json => {
        setDrinks(json.drinks)
      })
  }, [])

  return (
    <div>
      {drinks.map(drink => (
        <section key={drink.idDrink}>
          <Link to={`drinks/${drink.idDrink}`}>
            <img src={`${drink.strDrinkThumb}/preview`} alt={drink.strDrink} />
            <h2>{drink.strDrink}</h2>
          </Link>
        </section>
      ))}
    </div>

  )
}

