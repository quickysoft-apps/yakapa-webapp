import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Layout from './layout'
import Actions from './actions'
import Header from '../header'
import Workflows from '../../workflows/'

import { Radio } from 'semantic-ui-react'

class Container extends React.Component {

  constructor(props) {
    super(props)
    if (!this.props.agentListSelection || !this.props.endUserListSelection) {
      this.props.fallbackAction()
    } else {
      this.props.setTitle({ text: this.props.agentListSelection.nickname })
      this.props.setSubtitle({
        text: this.props.endUserListSelection.email,
        link: `/app/${Workflows.App.Steps.AgentList}`
      })
    }
  }

  render() {
    return (
      <Layout>
        <Radio toggle>Activer cet agent</Radio>
      </Layout>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    agentListSelection: state.agentList.get('selection'),
    endUserListSelection: state.endUserList.get('selection')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...Header.Actions }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
