import Namespace from './namespace'

const Types = {
  //Actions
  LOGIN: `${Namespace}/LOGIN`,
  LOGOUT: `${Namespace}/LOGOUT`,
  TO_DEFAULT: `${Namespace}/TO_DEFAULT`,
  SHOW_LOCK: `${Namespace}/SHOW_LOCK`,
  CLOSE_LOCK: `${Namespace}/CLOSE_LOCK`,
}

const login = function(payload) {
  return {
    type: Types.LOGIN,
    payload
  }
}

const logout = function({ history }) {
  return {
    type: Types.LOGOUT,
    history
  }
}

const toDefault = function({ history }) {
  return {
    type: Types.TO_DEFAULT,
    history
  }
}

const showLock = function() {
  return {
    type: Types.SHOW_LOCK
  }
}

const closeLock = function() {
  return {
    type: Types.CLOSE_LOCK
  }
}

export default {
  Types,
  login,
  logout,
  toDefault,
  showLock,
  closeLock
}