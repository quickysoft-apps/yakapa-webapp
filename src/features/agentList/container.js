import React from 'react'
import PropTypes from 'prop-types'

import { compose } from 'react-apollo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Message } from 'semantic-ui-react'

import Common from '../../common'
import Layout from './layout'
import Actions from './actions'
import Components from './components'
import Repository from './repository'

class Container extends React.Component {

  static propTypes = {
    addNewAction: PropTypes.func.isRequired,
    itemAction: PropTypes.func
  }

  componentWillMount() {
    this.props.subscribeToNewAgents({ email: this.props.emailContains })
  }

  render() {
    const loading = this.props.agents.loading
    const error = loading ? undefined : this.props.agents.error
    const agents = error || loading || !this.props.agents.allAgents ? [] : this.props.agents.allAgents

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

    return (
      <Layout>
        <Common.Components.ItemList items={agents} loading={loading} itemTemplate={Components.ListItemTemplate} />
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
    emailContains: state.agentList.get('emailContains'),
    agentUpdatedAfter: state.agentList.get('agentUpdatedAfter'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(Repository.Agents)(Container))