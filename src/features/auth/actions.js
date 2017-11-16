import Namespace from './namespace'
import Common from '../../common'

const Types = {
  //Actions
  LOGIN: `${Namespace}/LOGIN`,
  LOGOUT: `${Namespace}/LOGOUT`,
  TO_DEFAULT: `${Namespace}/TO_DEFAULT`,
  SHOW_LOCK: `${Namespace}/SHOW_LOCK`,
  CLOSE_LOCK: `${Namespace}/CLOSE_LOCK`,
  CHECK_AUTH: `${Namespace}/CHECK_AUTH`,
}

const login = function (payload) {
  return {
    type: Types.LOGIN,
    payload
  }
}

const logout = function ({ history }) {
  return {
    type: Types.LOGOUT,
    history
  }
}

const checkAuth = function ({ history }) {
  return (dispatch) => {
    Common.Authentication.checkAuthenticatedUser()
      .then(res => {
        if (res) {
          dispatch(toDefault({ history }))
        } else {
          dispatch(logout({ history }))
        }
      })
  }
}

const toDefault = function ({ history }) {
  return {
    type: Types.TO_DEFAULT,
    history
  }
}

const showLock = function () {
  return {
    type: Types.SHOW_LOCK
  }
}

const closeLock = function () {
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
  closeLock,
  checkAuth
}