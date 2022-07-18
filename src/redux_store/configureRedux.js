//[IK] For info on the "why?" of this all - https://redux.js.org/usage/configuring-your-store

import { configureStore } from '@reduxjs/toolkit'/*
import { applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'*/

import rootReducer from './reducers/rootReducer'

export default function configureRedux(preloadedState) {/*
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const composedEnhancers = compose(...enhancers)*/

  const store = configureStore( {reducer:rootReducer}, preloadedState)

  //[IK] update reducers without reloading page, useful for development but never in production
  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept( rootReducer, () => store.replaceReducer(rootReducer))
  }

  return store
}