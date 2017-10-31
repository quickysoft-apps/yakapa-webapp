import Namespace from './namespace'

const Types = {
  SELECT: `${Namespace}/SELECT`
}

const select = function ({ tag }) {
  return {
    type: Types.SELECT,
    tag
  }
}

export default {
  Types,
  select
}