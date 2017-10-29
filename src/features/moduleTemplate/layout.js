import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Layout extends Component {

  static propTypes = {
    
  }

  render() {
    return (      
      <div>   
         {this.props.children}     
      </div>
    )
  }
  
}

export default Layout


