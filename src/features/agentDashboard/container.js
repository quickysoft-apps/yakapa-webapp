import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Layout from './layout'
import Actions from './actions'
import HeaderActions from '../header/actions'
import Workflows from '../../workflows/'
import Components from './components'
import { Tab } from 'semantic-ui-react'

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

  updateStats = () => {
    if (!this.props.agentListSelection) {
      return
    }

    this.props.stream({
      definition: {
        name: 'pingStats',
        tags: [this.props.agentListSelection.tag],
        jobs: ['__yakapa_agent_status__'],        
        queries: [{
          name: 'last',
          subset: ['ping']          
        }, {
          name: 'average',
          series: 'ping'
        }]
      }
    })
    
  }

  componentDidMount() {
    this.updateStats()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.storedValue && nextProps.storedValue) {
      if (this.props.storedValue.timestamp !== nextProps.storedValue.timestamp) {
        if (nextProps.storedValue.tag === this.props.agentListSelection.tag) {
          this.updateStats()
        }
      }
    }
  }

  render() {

    const panes = [
      {
        menuItem: 'Statistiques', render: () =>
          <Tab.Pane className="basic">
            <Components.Stats pingStats={this.props.pingStats} />
          </Tab.Pane>
      },
      { menuItem: 'Configuration', render: () => <Tab.Pane className="basic"><Components.Settings /></Tab.Pane> },
      { menuItem: 'Tâches', render: () => <Tab.Pane className="basic">Liste des tâches</Tab.Pane> },
    ]

    return (
      <Layout>
        <Tab menu={{ stackable: true, secondary: true, pointing: true }} panes={panes} />
      </Layout >
    )
  }

}

function mapStateToProps(state, ownProps) {
  const pingStats = state.agentDashboard.get('pingStats')
  return {
    agentListSelection: state.agentList.get('selection'),
    endUserListSelection: state.endUserList.get('selection'),
    storedValue: state.agentDashboard.get('storedValue'),
    pingStats: pingStats
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...HeaderActions }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)
