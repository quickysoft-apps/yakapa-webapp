import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from './actions'

class Container extends React.Component {

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
  return bindActionCreators(Actions, dispatch)  
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
