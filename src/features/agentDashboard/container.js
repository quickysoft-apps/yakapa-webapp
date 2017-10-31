import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from './actions'
import HeaderActions from '../header/actions'
import Steps from '../../workflows/app/steps'

class Container extends React.Component {

  componentWillMount() {
    if (!this.props.agentListSelection) {
      this.props.fallbackAction()
    } else {
      this.props.setSubtitle({
        text: this.props.agentListSelection.tag,
        link: `/app/${Steps.EndUserList}`
      })      
    }
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
    agentListSelection: state.agentList.get('selection')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...HeaderActions }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
