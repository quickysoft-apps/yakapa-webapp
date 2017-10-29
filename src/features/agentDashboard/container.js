import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Actions from './actions'
import HeaderActions from '../header/actions'
import Steps from '../../workflows/app/steps'
import Common from '../../common'

class Container extends React.Component {

  componentWillMount() {
    if (!this.props.currentEndUserAgentTag) {
      this.props.fallbackAction()
    } else {
      this.props.setSubtitle({
        text: this.props.currentEndUserAgentTag,
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
    currentEndUserAgentTag: Common.StatePersistence.getCurrentEndUserAgentTag(),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...HeaderActions }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
