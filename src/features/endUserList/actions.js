import Namespace from './namespace'

const Types = {
  SET_CURRENT_ENDUSER_EMAIL: `${Namespace}/SET_CURRENT_ENDUSER_EMAIL`
}

const setCurrentEndUserEmail = function ({ email }) {
  return {
    type: Types.SET_CURRENT_ENDUSER_EMAIL,
    email
  }
}

export default {
  Types,
  setCurrentEndUserEmail
}