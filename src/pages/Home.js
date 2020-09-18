import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { DrinkList } from 'components/DrinkList'


export const Home = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact>
          <DrinkList />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}