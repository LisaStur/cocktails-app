import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DrinkList } from 'components/DrinkList'
import { DrinkInfo } from 'components/DrinkInfo'

export const Home = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <DrinkList />
        </Route>
        <Route path="/drinks/:drinkId">
          <DrinkInfo />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}