import { Map } from 'immutable'
import Actions from './actions'
import Common from '../../common'

const initialState = new Map({
  endUser: Common.StatePersistence.getCurrentEndUserEmail()
})

export default function reducer(state = initialState, action) {

  switch (action.type) {

    case Actions.Types.SET_CURRENT_ENDUSER_EMAIL:
      Common.StatePersistence.setCurrenEndUserEmail(action.email)
      return state

    default:
      return state
  }
}
