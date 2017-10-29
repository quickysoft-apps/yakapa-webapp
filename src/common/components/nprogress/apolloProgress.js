import React, { Component } from 'react'

import { connect } from 'react-redux'

import './nprogress.css'
import NProgress from 'nprogress'

class Progress extends Component {

  _doProgress(isProgressing) {
    NProgress.configure({ parent: '#nprogress-parent' })
    if (isProgressing) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }

  componentWillReceiveProps(nextProps) {
    this._doProgress(nextProps.progressing)
  }

  render() {
    return (
      <div id='nprogress-parent' style={{ height: '4px' }}>
        {this.props.children}
      </div>
    )
  }

  componentDidMount() {
    NProgress.configure({ parent: '#nprogress-parent' })
    this._doProgress(this.props.progressing)    
  }

}

function mapStateToProps(state, ownProps) {
  return {
    progressing: Object.keys(state.apollo.data).length <= 0
  }
}

export default connect(mapStateToProps)(Progress)