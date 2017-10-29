const setCurrenEndUserEmail = (email) => {
  window.localStorage.setItem('currentEndUserEmail', email)
}

const getCurrentEndUserEmail = () => {
  return window.localStorage.getItem('currentEndUserEmail')    
}

export default {
  setCurrenEndUserEmail,
  getCurrentEndUserEmail
}