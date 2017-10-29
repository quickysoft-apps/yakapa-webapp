const setCurrenEndUserEmail = (email) => {
  window.localStorage.setItem('currentEndUserEmail', email)
}

const getCurrentEndUserEmail = () => {
  return window.localStorage.getItem('currentEndUserEmail')    
}

const setCurrenEndUserAgentTag = (email) => {
  window.localStorage.setItem('currentEndUserAgentTag', email)
}

const getCurrentEndUserAgentTag = () => {
  return window.localStorage.getItem('currentEndUserAgentTag')    
}

export default {
  setCurrenEndUserEmail,
  getCurrentEndUserEmail,
  setCurrenEndUserAgentTag,
  getCurrentEndUserAgentTag
}