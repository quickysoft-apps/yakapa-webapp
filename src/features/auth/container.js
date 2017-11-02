import React from 'react'
import { compose } from 'react-apollo'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Common from '../../common'
import Actions from './actions'
import Repository from './repository'

class Container extends React.Component {

  render() {
    if (this.props.lock) {
      this.props.lock.show(this.props.initialScreen)
    }
    return <div id='login-container' />
  }

  componentDidMount() {

    //Logout
    if (this.props.match.path === '/sign-off') {
      return this.props.logout({ history: this.props.history })
    }

    //Already authenticated
    if (this.props.isAuthenticated) {
      return this.props.toDefault({ history: this.props.history })
    }

    //Do we need to show the Auth0 lock component ?
    const { token, secret } = Common.Authentication.extractInfoFromHash()
    if (!Common.Authentication.checkSecret(secret) || !token) {
      return this.props.showLock()
    }

    //User is authenticated so go on login process...
    this.props.login({ token })
    this.props.createUser({ variables: { idToken: token, tag: Common.Authentication.getAgentTag() } })
    this.props.toDefault({ history: this.props.history })
  }

  componentWillUnmount() {
    if (this.props.lock) {
      this.props.closeLock()
    }
  }

}
function mapStateToProps(state, ownProps) {

  return {
    loggedUser: state.auth.get('loggedUser'),
    isAuthenticated: state.auth.get('isAuthenticated'),
    lock: state.auth.get('lock')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(compose(Repository.Users)(Container))



