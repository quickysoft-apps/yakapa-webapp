import { } from 'redux'
import { AgentClient } from './agentClient'
import { Agent } from 'yakapa-agent-client'
import AgentClientActions from '../features/agentClient/actions'
import Authentication from './authentication'


const agent = new Agent({
  port: 3001,
  server: 'https://mprj.cloudapp.net',
  tag: Authentication.getAgentTag(),
  nickname: Authentication.getUserFromLocalStorage() ? Authentication.getUserFromLocalStorage().id : 'Yakapa User'
})


const client = new AgentClient()

export function middleware() {
  return api => next => action => {
    const result = next(action)
    if (action.type === 'yakapa/stream') {
      //client.emit(AgentEvent.CHAT, action.payload.message, action.payload.from);
      agent.client.emit('yakapa/stream', { 
        tags: action.payload.tags,
        select: ['ping'],
        query: {
          name: 'last',
          params: {}          
        }
      })
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