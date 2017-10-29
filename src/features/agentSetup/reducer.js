import { Map } from 'immutable'
import Actions from './actions'

const initialState = new Map({
  email: ''
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.SET_EMAIL:
      return state.set('email', action.email)

    default:
      return state
  }
}
