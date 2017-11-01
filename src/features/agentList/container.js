import React from 'react'
import PropTypes from 'prop-types'

import { compose } from 'react-apollo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Header from '../header'
import Workflows from '../../workflows/'

import { Message } from 'semantic-ui-react'

import Common from '../../common'
import Layout from './layout'
import Actions from './actions'
import Components from './components'
import Repository from './repository'

class Container extends React.Component {

  static propTypes = {
    addNewAction: PropTypes.func.isRequired,
    itemAction: PropTypes.func,
    fallbackAction: PropTypes.func
  }

  constructor(props) {
    super(props)
    if (!this.props.endUserListSelection) {
      this.props.fallbackAction()
    } else {
      this.props.setSubtitle({
        text: this.props.endUserListSelection.email,
        link: `/app/${Workflows.App.Steps.EndUserList}`
      })
      this.props.subscribeToNewAgents({ email: this.props.endUserListSelection.email })
    }
  }

  render() {
    const agentsQuery = this.props.findAgentByEndUserEmailContainsAndCreatedAfter
    const loading = agentsQuery.loading
    const error = loading ? undefined : agentsQuery.error
    const agents = error || loading || !agentsQuery.allAgents ? [] : agentsQuery.allAgents

    const errorMessage = <Message error>
      <Message.Header>
        Quelque chose s'est mal passé :-(
      </Message.Header>
      <p>Nous ne parvenons pas à afficher la liste des agents installés chez cet utilisateur. Veuillez vérifier votre connexion ou essayer ultérieurement.</p>
    </Message>

    const starter = <div>
      <Message info>
        <Message.Header>Aucun agent configuré chez cet utilisateur final...</Message.Header>
        <p>Vous pourriez commencer par installer un agent chez votre utilisateur ?</p>
      </Message>
    </div>

    const itemTemplate = Components.ListItemTemplate((ownProps) => {
      this.props.select({
        tag: ownProps.tag,
        nickname: ownProps.nickname
      })
      this.props.itemAction()
    })

    return (
      <Layout>
        <Common.Components.ItemList
          items={agents}
          loading={loading}
          itemTemplate={itemTemplate} />
        {error ? errorMessage : null}
        {agents.length === 0 && !loading && !error ? starter : null}
        {error ? null : <Common.Components.AddNew action={this.props.addNewAction} />}
      </Layout>
    )
  }

}

function mapStateToProps(state, ownProps) {

  return {
    auth0UserId: state.auth.get('loggedUser').user_id,
    endUserListSelection: state.endUserList.get('selection'),
    agentUpdatedAfter: state.agentList.get('agentUpdatedAfter'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...Header.Actions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(Repository.Agents)(Container))