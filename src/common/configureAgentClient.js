import Agent from 'yakapa-agent-client'
import { Json } from 'yakapa-common'
import LZString from 'lz-string'
import AgentClientActions from '../features/agentClient/actions'
import AgentDashboardActions from '../features/agentDashboard/actions'
import Authentication from './authentication'

const client = new Agent.Client({
  server: 'https://mprj.cloudapp.net',
  tag: Authentication.getAgentTag(),
  nickname: Authentication.getUserFromLocalStorage() ? Authentication.getUserFromLocalStorage().id : 'Yakapa User'
})

export function middleware() {
  return api => next => action => {
    const result = next(action)

    if (action.type === AgentDashboardActions.Types.STREAM) {
      client.emit('yakapa/stream', JSON.stringify(action.definition))
    }

    return result
  }
}

export function listen(store) {

  client.emitter.on('connected', () => {
    store.dispatch(AgentClientActions.connected())
  })

  client.emitter.on('yakapa/stored', (socketMessage) => {
    const decompressed = Json.from(LZString.decompressFromUTF16(socketMessage.message))
    store.dispatch(AgentDashboardActions.stored({
      from: decompressed.from,
      job: decompressed.job
    }))
  })

  client.emitter.on('yakapa/streamed', (socketMessage) => {
    const decompressed = Json.from(LZString.decompressFromUTF16(socketMessage.message))    
    store.dispatch(AgentDashboardActions.streamed({ stream: decompressed }))
  })

  client.emitter.on('yakapa/disconnected', (socketMessage) => {
    store.dispatch(AgentClientActions.disconnected())
  })

}