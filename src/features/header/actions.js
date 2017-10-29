import Namespace from './namespace'

const Types = {
  LOGOUT: `${Namespace}/LOGOUT`
}

const logout = function() {
  return {
    type: Types.LOGOUT
  }
}

export default {
  Types, 
  logout
}