// @flow

import React from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import { BrowserRouter } from 'react-router-dom'
import reducers from './reducers'
import rootSaga from './sagas'
import AppRoutes from './AppRoutes'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducers, applyMiddleware(sagaMiddleware, logger))

sagaMiddleware.run(rootSaga)

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </BrowserRouter>
  )
}

export default App
