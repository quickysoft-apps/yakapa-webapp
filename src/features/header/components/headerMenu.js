import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'semantic-ui-react'
import HeaderMenuItem from './headerMenuItem'

class HeaderMenu extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired,
    workflow: PropTypes.string.isRequired,
    items: PropTypes.array,
    activeItem: PropTypes.string
  }

  render() {

    return (
      <Menu fluid widths={2} color='blue' icon pointing secondary>
        {this.props.items.map((item, index) => <HeaderMenuItem
          key={index}  
          history={this.props.history}
          workflow={this.props.workflow}
          name={item.name}
          activeItem={this.props.activeItem}
          iconName={item.iconName} />)}
      </Menu>
    )
  }
}

export default HeaderMenu