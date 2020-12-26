import React from 'react'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'

import Home from '../pages/home'
import Life from '../pages/life'
import Shop from '../pages/home'
import Mine from '../pages/mine'
import NotFound from '../pages/notFound'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/life" component={Life}/>
        <Route path="/shop" component={Shop}/>
        <Route path="/mine" component={Mine}/>
        <Route path="/*" component={NotFound}/>
      </Switch>
    </Router>
  )
}

export default AppRouter 