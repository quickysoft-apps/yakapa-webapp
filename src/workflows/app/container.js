import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from './layout'
import Features from '../../features'
import Actions from './actions'
import Steps from './steps'

import Common from '../../common'
import Namespace from './namespace'

class Container extends React.Component {

  _link = (step, state) => {    
    this.props.history.push({
      pathname: `/${Namespace}/${step}`,
      state
    })    
  }

  _getMenuItems = (items) => {
    const mappedItems = new Map(items)
    const menuItems = []
    mappedItems.forEach((value, key) => {
      menuItems.push({ history: this.props.history, workflow: Namespace, name: key, iconName: value })
    })
    return menuItems
  }

  _getContent() {

    switch (this.props.currentStep) {

      case Steps.EndUserList:
        return {
          component: <Features.EndUserList.Container            
            addNewAction={() => this._link(Steps.AgentSetup)}
            itemAction={() => this._link(Steps.AgentList)}
          />/*,
          menuItems: this._getMenuItems([
            [Steps.EndUserList, 'user circle outline'],
            [Steps.UserMore, 'content']
          ])*/
        }

      case Steps.UserMore:
        return {
          /*menuItems: this._getMenuItems([
            [Steps.EndUserList, 'user circle outline'],
            [Steps.UserMore, 'content']
          ])*/
        }

      case Steps.AgentSetup:
        return {
          component: <Features.AgentSetup.Container
            nextAction={(search) => this._link(Steps.AgentList, search)}
            cancelAction={() => this._link(Steps.EndUserList)} />
        }

      case Steps.AgentList:
        const currentEmail = this.props.history.location.state ? this.props.history.location.state.email : ''
        return {
          component: <Features.AgentList.Container
            email={currentEmail}
            addNewAction={() => this._link(Steps.AgentSetup)} />
        }

      case Steps.AgentDashboard:
        return {
          component: <Features.AgentDashboard.Container />
        }

      default:
        return <div>Not found</div>

    }

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.location.pathname !== this.props.location.pathname) {
      this
        .props
        .locationChanged({ location: nextProps.location })
    }
  }

  componentWillMount() {
    this
      .props
      .locationChanged({ location: this.props.location })
  }

  render() {
    const content = this._getContent()
    return (
      <Layout history={this.props.history} menuItems={content.menuItems}>
        <Common.Components.Transition>
          {content.component}
        </Common.Components.Transition>
      </Layout>
    )
  }

}

function mapStateToProps(state, ownProps) {
  return {
    currentStep: state.app.get('currentStep'),
    loggedUser: state.auth.get('loggedUser')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)