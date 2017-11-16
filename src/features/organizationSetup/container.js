import React from 'react'
import PropTypes from 'prop-types'
import browserHistory from '../../common/history'
import { Form, Icon } from 'semantic-ui-react'
import Common from '../../common'

class OrganizationSetup extends React.Component {

  constructor(props) {
    super(props)
    const authenticatedUser = Common.Authentication.getUserFromLocalStorage()
    this.state = {
      authenticatedUser,
      isAuthenticated: !!authenticatedUser
    }
  }

  static propTypes = {    
    skipAction: PropTypes.func
  }

  skipAction = (e) => {
    e.preventDefault()
    browserHistory.push('/')
  }

  handleSubmit = (e, data) => {
    e.preventDefault()    
  }

  handleSkip = (e, data) => {
    e.preventDefault()
    this.props.skipAction(data)
  }

  render() {
    return (
      <Form onSubmit={this.handleSubmit} >
        <Form.Input label='Nom de votre entreprise' name='company' placeholder='Acme Corporation' />
        <Form.Group widths='equal'>
          <Form.Input label='Prénom' name='firstname' placeholder='First name' defaultValue={this.state.authenticatedUser.given_name} />
          <Form.Input label='Nom' name='lastname' placeholder='Last name' defaultValue={this.state.authenticatedUser.family_name} />
        </Form.Group>
        <Form.Input label='Email' name='email' placeholder='acme.company@general.com' defaultValue={this.state.authenticatedUser.email} />
        <Form.Group>
          <Form.Button primary type='submit'>OK</Form.Button>          
          {this.props.skipAction ? <Form.Button onClick={this.handleSkip}>Plus tard<Icon name='right arrow' /></Form.Button> : <div />}
        </Form.Group>
      </Form>
    )
  }
}

export default OrganizationSetup