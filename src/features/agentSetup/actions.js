import Namespace from './namespace'

const Types = {
  SET_EMAIL: `${Namespace}/SET_EMAIL`
}

const setEmail = function({email}) {
  return {
    type: Types.SET_EMAIL,    
    email
  }
}

export default {
  Types,
  setEmail
}