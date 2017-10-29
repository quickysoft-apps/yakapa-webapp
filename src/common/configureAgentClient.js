import {} from 'redux'
import { AgentClient } from './agentClient'
import AgentClientActions from '../features/agentClient/actions'

const client = new AgentClient()

export function middleware() {
  return api => next => action => {
    const result = next(action)
    if (action.type === 'chat') {
      //client.emit(AgentEvent.CHAT, action.payload.message, action.payload.from);
    }
    return result
  }
}

export function listen(store) {
  
  client.emitter.on('connected', () => {
    console.debug("[AGENT] connected")
    store.dispatch(AgentClientActions.connected())
  })

  /*client.events.on('connectionError', (error) => {
    store.dispatch(Actions.connectionError(error))
  })

  client.events.on('pong', (ms) => {
    store.dispatch(Actions.pong(ms))
  })

  client.events.on('authenticated', (message) => {
    store.dispatch(Actions.authenticated(message))
  })*/

}