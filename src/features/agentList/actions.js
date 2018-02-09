import Namespace from './namespace'

const Types = {
  SELECT: `${Namespace}/SELECT`,
  REMOTE_CONFIGURATION_CHANGED: `${Namespace}/REMOTE_CONFIGURATION_CHANGED`
}

const select = function ({ tag, nickname }) {
  return {
    type: Types.SELECT,
    tag,
    nickname
  }
}

const remoteConfigurationChanged = function ({ configuration, from }) {
  return {
    type: Types.REMOTE_CONFIGURATION_CHANGED,
    configuration,
    from
  }  
}


export default {
  Types,
  select,
  remoteConfigurationChanged
}