import * as io from 'socket.io-client'
import * as LZString from 'lz-string'
import Authentication from './authentication'
import { EventEmitter } from 'events'

const SOCKET_SERVER_URL = 'https://mprj.cloudapp.net'
const DEFAULT_NICKNAME = 'Yakapa App'

const EVENT_PREFIX = 'yakapa'
const CHAT = `${EVENT_PREFIX}/chat`
const RESULT = `${EVENT_PREFIX}/result`
const AUTHENTICATED = `${EVENT_PREFIX}/authenticated`

class AgentClientEmitter extends EventEmitter {
  doConnected() {
    this.emit('connected')
  }
}

export class AgentClient {

  constructor() {

    this._emitter = new AgentClientEmitter()    
    this._isAuthenticated = false
    this._tag = Authentication.getAgentTag()

    this._socket = io(SOCKET_SERVER_URL, {
      rejectUnauthorized: false,
      query: `tag=${this._tag}`
    })

    this._socket.on('pong', (ms) => { this._emitter.emit('pong', ms) })
    this._socket.on('connect', () => { this.connected() })
    this._socket.on('connect_error', (error) => { this.connectionError(error) })
    this._socket.on('error', (error) => { this.socketError(error) })

    this._socket.on(AUTHENTICATED, (socketMessage) => { this.authenticated(socketMessage) })    
  }

  get emitter() {
    return this._emitter
  }

  getJson(json) {
    return typeof json === 'object' ? json : JSON.parse(json)
  }

  check(socketMessage) {

    if (this._isAuthenticated === false) {
      console.warn(`Je ne peux rien faire car je ne suis pas authentifié !`)
      return false
    }

    if (socketMessage == null) {
      console.warn(`Pas de message à traiter ?!`)
      return false
    }

    if (socketMessage.from == null) {
      console.warn(`Je ne veux pas recevoir des demandes provenant d'un expéditeur non défini !'`)
      return false
    }

    console.info(socketMessage)
    return true
  }

  emit(event = RESULT, payload, to) {
    const tag = Authentication.getAgentTag()    
    const compressed = payload != null ? LZString.compressToUTF16(payload) : null
    const socketMessage = {
      from: tag,
      nickname: DEFAULT_NICKNAME,
      to: to,
      result: event === RESULT ? compressed : null,
      message: event === CHAT ? compressed : null
    }

    this._socket.emit(event, socketMessage)
  }

  connected() {
    console.info('Connecté à', SOCKET_SERVER_URL)
    this._emitter.doConnected()
  }

  socketError(error) {
    console.info('Socket error', error)    
    this._emitter.emit('socketError', error)
  }

  connectionError(error) {
    console.info('Erreur connexion', error)
    this._emitter.emit('connectionError', error)
  }

  authenticated(socketMessage) {
    console.info('Bienvenue', socketMessage.nickname)
    this._isAuthenticated = true
    this._nickname = socketMessage.nickname    
    this._emitter.emit('authenticated', socketMessage)
  }

  async understand(socketMessage) {
    return new Promise((resolve, reject) => {
      if (!this.check(socketMessage)) reject()
      const decompressed = LZString.decompressFromUTF16(socketMessage.message)
      console.info(`Received chat message ${decompressed}`)
      //const emitter = socketMessage.From;
      //this.emit(SocketEvent.CHAT_MESSAGE, Faker.lorem.sentence(15), emitter);
      this._emitter.emit('chat', socketMessage)
      resolve()
    })
  }

  executeScript(socketMessage) {
    return new Promise((resolve, reject) => {
      resolve()
    })
  }

}
