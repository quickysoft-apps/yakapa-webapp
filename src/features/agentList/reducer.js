import { Map } from 'immutable'
import Actions from './actions'
import moment from 'moment'

const initialState = new Map({
  agentUpdatedAfter: moment().format('YYYY-MM-DD')
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.SELECT:
      return state.set('selection', { tag: action.tag })      

    default:
      return state
  }
}
