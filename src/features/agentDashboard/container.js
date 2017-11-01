import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Layout from './layout'
import Actions from './actions'
import HeaderActions from '../header/actions'
import Workflows from '../../workflows/'
import { Tab } from 'semantic-ui-react'
import Components from './components'

const panes = [  
  { menuItem: 'Général', render: () => <Tab.Pane className="basic">Rien</Tab.Pane> },
  { menuItem: 'Configuration', render: () => <Tab.Pane className="basic"><Components.GeneralSettings /></Tab.Pane> },
  { menuItem: 'Tâches programmées', render: () => <Tab.Pane className="basic">Rien</Tab.Pane> },
]

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
        <Tab basic menu={{ stackable: true, pointing: true, secondary: true }} panes={panes} />
      </Layout >
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
  return bindActionCreators({ ...Actions, ...HeaderActions }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
