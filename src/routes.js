import React from 'react'
import gql from 'graphql-tag';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Features from './features'
import Workflows from './workflows'

import { configureSimpleApolloClient } from './common/configureApolloClient'
import Common from './common'

const LOCAL_USER_UNVERIFIED = 'unverified'
const LOCAL_USER_VERIFIED = 'verified'
const LOCAL_USER_OBSOLETE = 'obsolete'

class Routes extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      localUserStatus: LOCAL_USER_UNVERIFIED
    }
  }

  componentDidMount() {
    const client = configureSimpleApolloClient()
    const storedUser = Common.Authentication.getUserFromLocalStorage()
    if (storedUser) {
      client.query({
        query: gql`
        {
          User(auth0UserId: "${storedUser.user_id}") {
            tag
          }
        }`
      })
        .then(data => {          
          if (data.data.User.tag) {
            Common.Authentication.setAgentTag(data.data.User.tag)
            this.setState({ localUserStatus: LOCAL_USER_VERIFIED })
          } else {
            //Stored user is obsolete --> clear local storage
            this.setState({ localUserStatus: LOCAL_USER_OBSOLETE })
          }
        })
    }
  }

  render() {
    return this.state.localUserStatus === LOCAL_USER_UNVERIFIED ? <div /> : (
      <Common.Components.Apollo>
        <Router>
          <Switch>
            <Route exact path="/" component={Features.Landing.Container} />
            <Route path="/sign-in" component={Features.Auth.Container} />
            <Route path="/sign-off" component={Features.Auth.Container} />
            <Route path="/app" render={(props) => {
              return (
                this.state.localUserStatus === LOCAL_USER_VERIFIED ?
                  <Workflows.App.Container {...props} /> :
                  <Redirect to="/sign-in" />)
            }} />
            <Route component={Common.Components.NotFound} />
          </Switch>
        </Router>
      </Common.Components.Apollo>
    )
  }

}

export default Routes
