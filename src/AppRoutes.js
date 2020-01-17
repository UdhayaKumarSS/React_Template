import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

const AppRoutes = () => {
  return (
    <div>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </div>
  )
}

export default AppRoutes
