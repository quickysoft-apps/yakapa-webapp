import { Map } from 'immutable'
import Actions from './actions'

import moment from 'moment'

const initialState = new Map({
  emailContains: '',
  agentUpdatedAfter: moment().format('YYYY-MM-DD')
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.MY_ACTION:
      return state.set('myState', 1)

    default:
      return state
  }
}
