import { Map } from 'immutable'
import Actions from './actions'
import Common from '../../common'

const initialState = new Map({
  
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.SET_CURRENT_ENDUSER_AGENT_TAG:
      Common.StatePersistence.setCurrenEndUserAgentTag(action.tag)
      return state

    default:
      return state
  }
}
