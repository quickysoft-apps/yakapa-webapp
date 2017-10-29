import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Features from './features'
import Workflows from './workflows'

import Common from './common'

class Routes extends React.Component {

  secureRender(component) {    
    const loggedUser = Common.Authentication.getUserFromLocalStorage()
    return loggedUser ? <component /> : <Redirect to="/sign-in"/>
  }

  render() {
    return (
      <Common.Components.Apollo>
        <Router>
          <Switch>
            <Route exact path="/" component={Features.Landing.Container} />
            <Route path="/sign-in" component={Features.Auth.Container} />
            <Route path="/sign-off" component={Features.Auth.Container} />
            <Route path="/app" render={(props) => 
              Common.Authentication.getUserFromLocalStorage() ?
              <Workflows.App.Container {...props} /> :
              <Redirect to="/sign-in"/>} />
            <Route component={Common.Components.NotFound} />
          </Switch>
        </Router>
      </Common.Components.Apollo>
    )
  }

}

export default Routes
