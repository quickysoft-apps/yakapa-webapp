import createHistory from 'history/createBrowserHistory'

let history = null

const getDefault = () => {    
  if (!history) {
    history = createHistory()
  }
  return history
}

export default {
  getDefault
}
