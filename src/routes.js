import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Features from './features'
import Workflows from './workflows'

import Common from './common'

class Routes extends React.Component {

  render() {
    return (
      <Common.Components.Apollo>
        <Router>
          <Switch>
            <Route exact path="/" component={Features.Landing.Container} />
            <Route path="/sign-in" component={Features.Auth.Container} />
            <Route path="/sign-off" component={Features.Auth.Container} />
            <Route path="/app" render={(props) =>
              <Common.Components.Secured history={props.history} fallback="/sign-in" >
                <Workflows.App.Container {...props} />
              </Common.Components.Secured>}
            />
            <Route component={Common.Components.NotFound} />
          </Switch>
        </Router>
      </Common.Components.Apollo>
    )
  }

}

export default Routes
