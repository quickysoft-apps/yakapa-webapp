import React from 'react'
import PropTypes from 'prop-types'

import { compose } from 'react-apollo'

import { Message } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Common from '../../common'

import Layout from './layout'
import Actions from './actions'
import HeaderActions from '../header/actions'
import Components from './components'
import Repository from './repository'

class Container extends React.Component {

  static propTypes = {
    addNewAction: PropTypes.func.isRequired,
    itemAction: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.props.setSubtitle({ text: this.props.userEmail })
  }

  render() {
    const loading = this.props.findEndUsersByUser.loading
    const error = loading ? undefined : this.props.findEndUsersByUser.error
    const endUsers = error || loading ? [] : this.props.findEndUsersByUser.User ? this.props.findEndUsersByUser.User.endUsers : []

    if (error) {
      console.error(error)
    }

    const starter = <div>
      <Message info>
        <Message.Header>Il n'y a personne par ici...</Message.Header>
        <p>Pour commencer, vous pouvez installer un agent chez l'un de vos client.</p>
      </Message>
    </div>

    const errorMessage = <Message error>
      <Message.Header>
        Quelque chose s'est mal passé :-(
      </Message.Header>
      <p>Nous ne parvenons pas à afficher la liste de vos client. Veuillez vérifier votre connexion ou essayer ultérieurement.</p>
    </Message>

    const itemTemplate = Components.ListItemTemplate((ownProps) => {
      this.props.select({ email: ownProps.email })
      this.props.itemAction()
    })

    return (
      <Layout>
        <Common.Components.ItemList
          items={endUsers}
          loading={loading}
          itemTemplate={itemTemplate} />
        {error ? errorMessage : null}
        {endUsers.length === 0 && !loading && !error ? starter : null}
        {error ? null : <Common.Components.AddNew action={this.props.addNewAction} />}
      </Layout>
    )
  }

}

function mapStateToProps(state, ownProps) {

  return {
    auth0UserId: state.auth.get('loggedUser') ? state.auth.get('loggedUser').user_id : undefined,
    userEmail: state.auth.get('loggedUser') ? state.auth.get('loggedUser').email : undefined    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...Actions, ...HeaderActions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(Repository.EndUsers)(Container))

