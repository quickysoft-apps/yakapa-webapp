import { Map } from 'immutable'
import Actions from './actions'
import moment from 'moment'
moment.locale('fr')

const initialState = new Map({
  agentUpdatedAfter: moment().format('YYYY-MM-DD')
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.SELECT:
      return state.set('selection', {
        tag: action.tag,
        nickname: action.nickname
      })

      case Actions.Types.REMOTE_CONFIGURATION_CHANGED:
      return state.set('selection', {
        tag: action.from,
        nickname: action.configuration.nickname
      })


    default:
      return state
  }
}
