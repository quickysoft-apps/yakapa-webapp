import Namespace from './namespace'

const Types = {
  STORED: `${Namespace}/STORED`,  
  STREAM: `${Namespace}/STREAM`,
  STREAMED: `${Namespace}/STREAMED`
}

const stream = function ({ definition }) {
  return {
    type: Types.STREAM,
    definition
  }
}

const streamed = function ({ value }) {
  return {
    type: Types.STREAMED,
    value
  }
}

const stored = function ({ from }) {
  return {
    type: Types.STORED,
    from
  }  
}

export default {
  Types,
  stored,
  stream,
  streamed
}