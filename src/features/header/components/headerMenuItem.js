import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { Menu, Icon } from 'semantic-ui-react'

class HeaderMenuItem extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    workflow: PropTypes.string.isRequired,
    activeItem: PropTypes.string.isRequired,
    iconName: PropTypes.string.isRequired
  }

  _handleClick = (e, { name }) => this.props.history.push(`/${this.props.workflow}/${name}`)

  render() {
    return (
      <Menu.Item name={this.props.name} active={this.props.activeItem === this.props.name} onClick={this._handleClick}>
        <Icon name={this.props.iconName} size='large' />        
      </Menu.Item>
    )
  }
}


export default HeaderMenuItem