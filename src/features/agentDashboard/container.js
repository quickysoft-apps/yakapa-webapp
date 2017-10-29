import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from './actions'
import HeaderActions from '../header/actions'

class Container extends React.Component {

  componentWillMount() {
    this.props.setSubtitle({ text: 'blavla' })
  }

  render() {
    return (
      <div>

      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    myState: state.agentDashboard.get('myState')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...HeaderActions }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
