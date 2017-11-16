import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Authentication from '../authentication'


export default class Secured extends React.Component {

  static propTypes = {
    fallback: PropTypes.string.isRequired,
    history: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props)
    this.state = { isValid: true }
  }

  async _checkStoredAuthentication() {
    const isValid = await Authentication.checkAuthenticatedUser()
    this.setState({ isValid })
  }

  async componentDidMount() {
    await this._checkStoredAuthentication()
  }

  async componentWillMount() {
    //await this._checkStoredAuthentication()
  }

  async componentWillReceiveProps(nextProps) {
    //await this._checkStoredAuthentication()
  }

  render() {
    return <div>
      {this.state.isValid ? this.props.children : <Redirect to={this.props.fallback} />}
    </div>
  }


}
