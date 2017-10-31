import { Map } from 'immutable'
import Actions from './actions'

const initialState = new Map({  
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.SELECT:
      return state.set('selection', { email: action.email })
      

    default:
      return state
  }
}
