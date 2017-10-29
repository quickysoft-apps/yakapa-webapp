import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Actions from './actions'

class Container extends React.Component {

  render() {
    return <div />
  }

}

function mapStateToProps(state, ownProps) {

  return {
    connected: state.agentClient.get('connected'),
    status: state.agentClient.get('status')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
