// @flow

import React from 'react'
import { Switch, Route, withRouter } from 'react-router-dom'

import Login from './components/Login'
import Home from './components/Home'

import { type History } from 'react-router-dom'

type Props = {
  history: History
}

const AppRoutes = ({ history }: Props) => {
  if (history.location.pathname === '/') {
    history.location.pathname = '/login'
  }

  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
      </Switch>
    </React.Fragment>
  )
}

export default withRouter(AppRoutes)
