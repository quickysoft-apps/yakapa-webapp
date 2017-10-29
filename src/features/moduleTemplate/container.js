import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from './layout'
import Actions from './actions'

class Container extends React.Component {

  render() {
    return (
      <Layout>
        <div/>          
      </Layout>
    )      
  }

}

function mapStateToProps(state, ownProps) {

  return {
    myState: state.myModule.get('myState')
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch)  
}


export default connect(mapStateToProps, mapDispatchToProps)(Container)

