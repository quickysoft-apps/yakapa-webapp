import Namespace from './namespace'

const Types = {
  SELECT: `${Namespace}/SELECT`
}

const select = function ({ email }) {
  return {
    type: Types.SELECT,
    email
  }
}

export default {
  Types,
  select
}