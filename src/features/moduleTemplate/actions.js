import Namespace from './namespace'

const Types = {
  MY_ACTION: `${Namespace}/MY_ACTION`
}

const myAction = function() {
  return {
    type: Types.MY_ACTION
  }
}

export default {
  Types, 
  myAction
}