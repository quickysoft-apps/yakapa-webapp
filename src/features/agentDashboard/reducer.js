import { Map } from 'immutable'
import Actions from './actions'

const initialState = new Map({
  streams: []  
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.STORED:
      return state.set('storedValue', {
        timestamp: new Date().toJSON().slice(0, 19),
        tag: action.from
      })


    case Actions.Types.STREAMED:            
      return state.set(`${action.stream.name}.${action.stream.query}`, action.stream.data)

    default:
      return state
  }
}
