import Namespace from './namespace'

const Types = {
  CONNECTED: `${Namespace}/CONNECTED`
}

const connected = function() {
  return {
    type: Types.CONNECTED
  }
}

export default {
  Types, 
  connected
}