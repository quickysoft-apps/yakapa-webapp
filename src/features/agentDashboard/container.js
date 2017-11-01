import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Layout from './layout'
import Actions from './actions'
import HeaderActions from '../header/actions'
import Workflows from '../../workflows/'
import Components from './components'
import { Tab } from 'semantic-ui-react'




const panes = [
  { menuItem: 'Statistiques', render: () => <Tab.Pane className="basic"><Components.Stats/></Tab.Pane> },
  { menuItem: 'Configuration', render: () => <Tab.Pane className="basic"><Components.Settings/></Tab.Pane> },
  { menuItem: 'Tâches', render: () => <Tab.Pane className="basic">Liste des tâches</Tab.Pane> },
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
        <Tab menu={{ stackable: true, secondary: true, pointing: true }} panes={panes} />
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
