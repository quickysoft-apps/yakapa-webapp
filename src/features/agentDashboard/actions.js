import Namespace from './namespace'

const Types = {
  STORED: `${Namespace}/STORED`,  
  STREAM: `${Namespace}/STREAM`,
  STREAMED: `${Namespace}/STREAMED`,
  AGENT_DISCONNECTED: `${Namespace}/AGENT_DISCONNECTED`,
  AGENT_CONNECTED: `${Namespace}/AGENT_CONNECTED`,
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

export default {
  Types,
  stored,
  stream,
  streamed,
  agentDisconnected,
  agentConnected
}