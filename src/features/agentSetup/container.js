import React from 'react'
import PropTypes from 'prop-types'

import { compose } from 'react-apollo'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { Form } from 'semantic-ui-react'

import Actions from './actions'
import Repository from './repository'
import Generators from './generators'

class Container extends React.Component {

  static propTypes = {
    auth0UserId: PropTypes.string.isRequired,
    nextAction: PropTypes.func.isRequired,
    cancelAction: PropTypes.func.isRequired
  }

  _emailChanged = (e) => {
    const value = e.target.value
    //if (e.type === 'blur' || (e.type === 'keypress' && e.charCode === 13)) {
    this.props.setEmail({ email: value })
    //}
  }

  _handleSubmit = (e, data) => {
    e.preventDefault()
    const userName = Generators.generateEndUserName() //En attendant de saisir plus d'informations               
    const endUser = this.props.findEndUserByEmail.EndUser
    const user = this.props.findUserByAuth0Id.User
    if (endUser) {
      this.props.attachUserToEndUser(user, endUser).then(() => {
        this.props.nextAction({ email: this.props.email })
      })
    } else {
      this.props.createEndUser(this.props.email, userName, user.id)
        .then(() => {
          this.props.nextAction({ email: this.props.email })
        })
    }
  }

  _handleCancel = (e) => {
    e.preventDefault()
    this.props.cancelAction()
  }

  render() {

    const findEndUserByEmail = this.props.findEndUserByUser
    const findUserByAuth0Id = this.props.findUserByAuth0Id
    const loading = (findEndUserByEmail && findEndUserByEmail.loading) || (findUserByAuth0Id && findUserByAuth0Id.loading)

    return (
      <Form method='post' onSubmit={this._handleSubmit} >
        <Form.Field>
          <label>Email de votre client</label>
          <input type="email" name="email" placeholder='dave.null@mail.com' onChange={this._emailChanged} onKeyPress={this._emailChanged} required />
        </Form.Field>
        <Form.Group>
          <Form.Button primary type='submit' disabled={loading}>OK</Form.Button>
          <Form.Button onClick={this._handleCancel}>Annuler</Form.Button>
        </Form.Group>
      </Form>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    auth0UserId: state.auth.get('loggedUser').user_id,
    email: state.agentSetup.get('email'),
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(Repository.EndUsers, Repository.Users)(Container))

