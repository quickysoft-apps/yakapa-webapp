import { Map } from 'immutable'
import Actions from './actions'

const initialState = new Map({
  myState: 0
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.MY_ACTION:
      return state.set('myState', 1)

    default:
      return state
  }
}
