import { } from 'redux'
import Agent from 'yakapa-agent-client'
import AgentClientActions from '../features/agentClient/actions'
import Authentication from './authentication'

const client = new Agent.Client({
  server: 'https://mprj.cloudapp.net',
  tag: Authentication.getAgentTag(),
  nickname: Authentication.getUserFromLocalStorage() ? Authentication.getUserFromLocalStorage().id : 'Yakapa User'
})

export function middleware() {
  return api => next => action => {
    const result = next(action)
    if (action.type === 'yakapa/stream') {      
      /*client.emit('yakapa/stream', { 
        tags: action.payload.tags,
        select: ['ping'],
        query: {
          name: 'last',
          params: {}          
        }
      })*/
    }
    return result
  }
}

export function listen(store) {

  client.emitter.on('connected', () => {
    console.debug("[AGENT] connected")
    store.dispatch(AgentClientActions.connected())
  })

}