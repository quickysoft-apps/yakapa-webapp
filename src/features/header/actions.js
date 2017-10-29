import Namespace from './namespace'

const Types = {
  LOGOUT: `${Namespace}/LOGOUT`,
  SET_SUBTITLE: `${Namespace}/SET_SUBTITLE`
}

const logout = function() {
  return {
    type: Types.LOGOUT
  }
}

const setSubtitle = function({text, link}) {
  return {
    type: Types.SET_SUBTITLE,
    text,
    link
  }
}

export default {
  Types, 
  logout,
  setSubtitle
}