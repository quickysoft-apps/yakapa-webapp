import Namespace from './namespace'

const Types = {
  SET_CURRENT_ENDUSER_AGENT_TAG: `${Namespace}/SET_CURRENT_ENDUSER_AGENT_TAG`
}

const setCurrentEndUserAgentTag = function ({ tag }) {
  return {
    type: Types.SET_CURRENT_ENDUSER_AGENT_TAG,
    tag
  }
}

export default {
  Types,
  setCurrentEndUserAgentTag
}