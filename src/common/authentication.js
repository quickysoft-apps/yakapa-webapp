import jwtDecode from 'jwt-decode'
import uuid from 'uuid'

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

const extractInfoFromHash = () => {
  const { id_token, state } = getQueryParams()
  return { token: id_token, secret: state }
}

const setToken = (token) => {
  window.localStorage.setItem('token', token)
  window.localStorage.setItem('user', JSON.stringify(jwtDecode(token)))
}

const unsetToken = () => {
  const secret = window.localStorage.secret
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  window.localStorage.removeItem('secret')
  window.localStorage.removeItem(`com.auth0.auth.${secret}`)
  window.localStorage.setItem('logout', Date.now())
}

const getUserFromLocalStorage = () => {
  const json = window.localStorage.user
  return json ? JSON.parse(json) : undefined
}

const setAgentTag = (agentTag) => {
  window.localStorage.setItem('agentTag', agentTag)
}

const getAgentTag = () => {
  let tag = window.localStorage.getItem('agentTag')
  if (!tag) {
    tag = uuid.v4()
    setAgentTag(tag)
  }
  return tag
}

const setCurrenEndUser = (endUser) => {
  window.localStorage.setItem('endUser', endUser)
}

const getCurrentEndUser = () => {
  return window.localStorage.getItem('endUser')    
}

const setSecret = () => {
  const secret = uuid.v4()
  window.localStorage.setItem('secret', secret)
  return secret
}

const getSecret = () => {
  return window.localStorage.secret
}

const checkSecret = (secret) => {
  return window.localStorage.secret === secret
}

export default {
  extractInfoFromHash,
  setToken,
  unsetToken,
  getUserFromLocalStorage,
  setSecret,
  getSecret,
  checkSecret,
  setAgentTag,
  getAgentTag,
  setCurrenEndUser,
  getCurrentEndUser
}