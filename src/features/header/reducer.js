import browserHistory from '../../common/history'
import { Map } from 'immutable'
import Actions from './actions'

const initialState = new Map({
  progressing: false
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.LOGOUT:
      browserHistory.push('/sign-off')
      return state

    default:
      return state
  }
}
