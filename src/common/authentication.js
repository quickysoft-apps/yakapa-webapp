import jwtDecode from 'jwt-decode'
import uuid from 'uuid'

import { configureSimpleApolloClient } from './configureApolloClient'
import gql from 'graphql-tag'

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
  window.localStorage.removeItem('agentTag')
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

const checkAuthenticatedUser = async function () {
  const client = configureSimpleApolloClient()
  const storedUser = getUserFromLocalStorage()
  
  if (!storedUser) {    
    return false
  }

  const query = await client.query({
    query: gql`
      {
        User(auth0UserId: "${storedUser.user_id}") {
          tag
        }
      }`
  })

  if (query.data.User) {
    setAgentTag(query.data.User.tag)
    return true
  } else {
    unsetToken()
    return false
  }

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
  checkAuthenticatedUser
}