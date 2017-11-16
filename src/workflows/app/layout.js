import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Grid, Segment } from 'semantic-ui-react'

import Namespace from './namespace'
import Features from '../../features'
import Common from '../../common'

class Layout extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    menuItems: PropTypes.array
  }

  render() {
    return (
      <div>
        <Features.Header.Container history={this.props.history} workflow={Namespace} menuItems={this.props.menuItems} />
        <Grid>
          <Grid.Row centered>
            <Grid.Column mobile={16} tablet={12} computer={8}>
              <Segment basic padded='very'>
                {this.props.children}
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default Layout
