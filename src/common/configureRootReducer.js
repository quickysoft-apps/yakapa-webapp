import { combineReducers } from 'redux'

import Features from '../features'
import Workflows from '../workflows'

export default (apolloClient) => (
  combineReducers({
    apollo: apolloClient.reducer(),    
    [Features.Auth.Namespace]: Features.Auth.Reducer,
    [Features.Header.Namespace]: Features.Header.Reducer,
    [Features.AgentSetup.Namespace]: Features.AgentSetup.Reducer,
    [Features.AgentDashboard.Namespace]: Features.AgentDashboard.Reducer,
    [Features.AgentList.Namespace]: Features.AgentList.Reducer,    
    [Features.EndUserList.Namespace]: Features.EndUserList.Reducer,
    [Features.AgentClient.Namespace]: Features.AgentClient.Reducer,
    [Workflows.App.Namespace]: Workflows.App.Reducer
  })
)