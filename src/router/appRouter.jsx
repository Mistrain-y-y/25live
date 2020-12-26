import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from '../pages/home'
import Life from '../pages/life'
import Shop from '../pages/shop'
import Mine from '../pages/mine'
import NotFound from '../pages/notFound'

const AppRouter = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/life" exact component={Life} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/mine" exact component={Mine} />
      <Route path="/*" component={NotFound} />
    </Switch>
  )
}

export default AppRouter 