import LZString from 'lz-string'
import socketio from 'socket.io-client'
import CryptoJS from 'crypto-js'
import Authentication from './authentication'

const SOCKET_KEY = CryptoJS.enc.Utf8.parse('529C04AEE8E2F089A3926431CD036191')
const SOCKET_IV = CryptoJS.enc.Utf8.parse('7D421B3BF773C114')

const SOCKET_SERVER_URL = 'https://mprj.cloudapp.net'

const EVENT_PREFIX = 'yakapa'
const CHAT = `${EVENT_PREFIX}/chat`
const RESULT = `${EVENT_PREFIX}/result`
const AUTHENTICATION = `${EVENT_PREFIX}/authentication`
const AUTHENTICATED = `${EVENT_PREFIX}/authenticated`

const configureSocket = () => {
  const socket = socketio.connect(SOCKET_SERVER_URL, { reconnect: true, ignoreServerCertificateValidation: true })      

  socket.on('connect', () => {    
    const tag = Authentication.getAgentTag()
    console.log('Agent', tag, 'Connecté à', SOCKET_SERVER_URL)  
    socket.emit(AUTHENTICATION, { From: tag })    
  })

  return socket
}

const tryDeserialize = (obj) => {  
  if (typeof obj === 'string') {
    try {
      return JSON.parse(obj)
    } catch (e) {
      return obj
    }
  }
  return obj
}

const trySerialize = (obj) => {  
  return typeof obj === 'string' ? obj : JSON.stringify(obj) 
}

const pack = (obj) => {  
  const compressed = LZString.compressToUTF16(trySerialize(obj))
  return compressed
}

const unpack = (string) => {
  const decompressed = LZString.decompressFromUTF16(string)
  const deserialized = tryDeserialize(decompressed)
  return deserialized
}

export default {
  SOCKET_SERVER_URL,
  SOCKET_KEY,  
  SOCKET_IV,  
  configureSocket,
  pack, 
  unpack,
  trySerialize,
  tryDeserialize,
  Events : {
    CHAT,
    RESULT,
    AUTHENTICATION,
    AUTHENTICATED
  } 
}




