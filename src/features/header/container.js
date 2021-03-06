import React from 'react'
import PropTypes from 'prop-types'

import { Segment, Grid } from 'semantic-ui-react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Common from '../../common'
import Actions from './actions'
import Components from './components'


class Container extends React.Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    workflow: PropTypes.string.isRequired,
    menuItems: PropTypes.array,
    agentStatus: PropTypes.string,
    subtitleText: PropTypes.string
  }

  render() {
    return (
      <div>
        <div className="ui inline cookie nag">
          <span className="title">
            We use cookies to ensure you get the best experience on our website
          </span>
          <i className="close icon"></i>
        </div>
        <Segment basic className="very top">
          <Grid>
            <Grid.Row centered color="blue" columns="equal">
              <Grid.Column verticalAlign='middle'>
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="middle">
                <Components.Title text={this.props.titleText} />
              </Grid.Column>
              <Grid.Column textAlign="left">
              </Grid.Column>
            </Grid.Row>
            <Grid.Row centered color="blue" className="unpadded" columns="equal">
              <Grid.Column verticalAlign="middle">
              </Grid.Column>
              <Grid.Column textAlign="center" verticalAlign="top">
                <Components.Subtitle text={this.props.subtitleText} link={this.props.backLink} />
              </Grid.Column>
              <Grid.Column textAlign="right">
                <Segment basic>
                  {this.props.agentStatus}
                </Segment>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>

        <Common.Components.ApolloProgress />

        {this.props.menuItems ? <Components.HeaderMenu
          history={this.props.history}
          workflow={this.props.workflow}
          activeItem={this.props.currentStep}
          items={this.props.menuItems} /> : null}

      </div>
    )
  }

}

function mapStateToProps(state, ownProps) {

  return {
    currentStep: state.app.get('currentStep'),
    titleText: state.header.get('title'),
    subtitleText: state.header.get('subtitle'),
    backLink: state.header.get('backLink'),
    taskIsProgressing: state.app.get('taskIsProgressing'),
    agentStatus: state.agentClient.get('status')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
