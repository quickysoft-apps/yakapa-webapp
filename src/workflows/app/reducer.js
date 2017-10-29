import { fromJS } from 'immutable'
import Actions from './actions'
import Steps from './steps'

const initialState = fromJS({
  currentStep: Steps.EndUserList,
  steps: [
    [Steps.EndUserList, 'Utilisateurs finaux'],
    [Steps.AgentSetup, 'Nouvel utilisateur'],
    [Steps.AgentList, 'Agents'],    
    [Steps.AgentDashboard, "Tableau de bord de l'agent"]
  ]
})

const getStepByIndex = (state, index) => {
  const steps = state.get('steps').toJS()
  return index >= 0 ? steps[index][0] : steps[0][0]
}

export default function reducer(state = initialState, action) {

  let step

  switch (action.type) {

    case Actions.Types.LOCATION_CHANGED:
      let steps = action.location.pathname.split('/')
      steps.splice(0, 2)
      step = steps.length === 0 ? getStepByIndex(state, 0) : steps.join('/')
      step = step.length === 0 ? getStepByIndex(state, 0) : step
      return state.set('currentStep', step)

    default:
      return state

  }



}
