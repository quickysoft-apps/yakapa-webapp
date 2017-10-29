import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import * as agentClient from './configureAgentClient'
import configureRootReducer from './configureRootReducer'
import { routerReducer } from 'react-router-redux'

let store = null

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = (apolloClient) => (composeEnhancers(
      applyMiddleware(apolloClient.middleware()),
      applyMiddleware(thunk),
      applyMiddleware(agentClient.middleware())
))

export default (apolloClient, initialState) => {  
  const rootReducer = configureRootReducer(apolloClient, routerReducer)
  if (!store) {
    store = createStore(rootReducer, initialState, enhancer(apolloClient))  
    agentClient.listen(store)
  }
  return store
}
