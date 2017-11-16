import { Map } from 'immutable'
import Actions from './actions'

const initialState = new Map({    
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.STORED:
      return state.set('storedValue', {
        timestamp: new Date().toJSON().slice(0, 19),
        tag: action.from
      })


    case Actions.Types.STREAMED:
      return state.set('lastPing', action.value.ping)

    default:
      return state
  }
}
