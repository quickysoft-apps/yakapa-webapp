import Namespace from './namespace'

const Types = {
  STORED: `${Namespace}/STORED`,  
  STREAM: `${Namespace}/STREAM`,
  STREAMED: `${Namespace}/STREAMED`,
  AGENT_DISCONNECTED: `${Namespace}/AGENT_DISCONNECTED`,
  AGENT_CONNECTED: `${Namespace}/AGENT_CONNECTED`,
  CHANGE_SETTINGS: `${Namespace}/CHANGE_SETTINGS`,
}

const stream = function ({ definition }) {
  return {
    type: Types.STREAM,
    definition
  }
}

const streamed = function ({ stream }) {
  return {
    type: Types.STREAMED,
    stream
  }
}

const stored = function ({ from }) {
  return {
    type: Types.STORED,
    from
  }  
}

const agentDisconnected = function () {
  return {
    type: Types.AGENT_DISCONNECTED
  }  
}

const agentConnected = function () {
  return {
    type: Types.AGENT_CONNECTED
  }  
}

const remoteChangeConfiguration = function ({ settings, to }) {
  return {
    type: Types.REMOTE_CHANGE_CONFIGURATION,
    settings,
    to
  }  
}

export default {
  Types,
  stored,
  stream,
  streamed,
  agentDisconnected,
  agentConnected,
  remoteChangeConfiguration
}