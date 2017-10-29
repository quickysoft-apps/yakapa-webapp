import Namespace from './namespace'

const Types = {
  LOCATION_CHANGED: `${Namespace}/LOCATION_CHANGED`,
}

const locationChanged = function ({ location }) {
  return {
    type: Types.LOCATION_CHANGED,
    location
  }
}

export default {
  Types,
  locationChanged,
}