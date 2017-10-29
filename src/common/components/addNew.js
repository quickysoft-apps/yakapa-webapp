import React from 'react'
import PropTypes from 'prop-types'

import { Segment, Button } from 'semantic-ui-react'

class AddNew extends React.Component {

  static propTypes = {
    action: PropTypes.func.isRequired
  }

  _handleClick = (e) => {
    this.props.action()
  }

  render() {
    return (
      <Segment basic textAlign='center'>
        <Button primary circular icon='add' onClick={this._handleClick} />
      </Segment>
    )
  }

}

export default AddNew