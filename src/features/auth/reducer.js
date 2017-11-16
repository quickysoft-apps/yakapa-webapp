import { Map } from 'immutable'
import Actions from './actions'
import Common from '../../common'
import logo from '../../common/images/ykp-logo96.png'

const lockConfig = {
  AUTH0_CLIENT_ID: 'Mj18E6FYmT4o4tRtJY7kaNbpRMzeyvGA',
  AUTH0_CLIENT_DOMAIN: 'ykp.eu.auth0.com'
}

const authenticatedUser = Common.Authentication.getUserFromLocalStorage()
const initialState = new Map({
  authenticatedUser  
})

const createLock = (secret) => {

  const lockOptions = {
    closable: false,
    theme: {
      primaryColor: '5495b8',
      logo
    },
    languageDictionary: {
      emailInputPlaceholder: 'your@email.com',
      title: ''
    },
    auth: {
      responseType: 'token',
      redirectUrl: `${window.location.origin}/sign-in`,
      params: {
        scope: 'openid profile email',
        state: secret
      }
    }
  }

  const Auth0Lock = require('auth0-lock').default
  return new Auth0Lock(lockConfig.AUTH0_CLIENT_ID, lockConfig.AUTH0_CLIENT_DOMAIN, lockOptions)
}

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.LOGIN:
      Common.Authentication.setToken(action.payload.token)
      return state
        .set('authenticatedUser', Common.Authentication.getUserFromLocalStorage())        

    case Actions.Types.LOGOUT:
      Common.Authentication.unsetToken()
      action.history.push('/')
      return state
        .set('authenticatedUser', undefined)        

    case Actions.Types.TO_DEFAULT:
      action.history.push('/app')
      return state

    case Actions.Types.SHOW_LOCK:
      var secret = Common.Authentication.setSecret()
      return state.set('lock', createLock(secret))

    case Actions.Types.CLOSE_LOCK:
      var lock = state.get('lock')
      if (lock) {
        lock.hide()
        return state.set('lock', undefined)
      }
      return state

    default:
      return state
  }
}
