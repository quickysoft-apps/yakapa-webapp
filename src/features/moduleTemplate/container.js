import React from 'react'

import { compose } from 'react-apollo'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Layout from './layout'
import Actions from './actions'
import Repository from './repository'

class Container extends React.Component {

  render() {
    return (
      <Layout>         
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

export default connect(mapStateToProps, mapDispatchToProps)(compose(Repository.MyEntity)(Container))


