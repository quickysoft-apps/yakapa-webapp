import { Map } from 'immutable'
import Actions from './actions'

const initialState = new Map({
  connected: false,
  status: 'déconnecté'
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.CONNECTED:
      return state
        .set('connected', true)
        .set('status', 'connecté')

    default:
      return state
  }
}
