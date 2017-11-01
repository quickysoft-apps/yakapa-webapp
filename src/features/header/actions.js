import Namespace from './namespace'

const Types = {
  LOGOUT: `${Namespace}/LOGOUT`,
  SET_TITLE: `${Namespace}/SET_TITLE`,
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

const setTitle = function({text}) {
  return {
    type: Types.SET_TITLE,
    text    
  }
}

export default {
  Types, 
  logout,
  setTitle,
  setSubtitle
}