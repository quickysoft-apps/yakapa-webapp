import Namespace from './namespace'

const Types = {
  SELECT: `${Namespace}/SELECT`
}

const select = function ({ tag, nickname }) {
  return {
    type: Types.SELECT,
    tag,
    nickname
  }
}

export default {
  Types,
  select
}