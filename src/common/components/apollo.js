import React from 'react'
import { ApolloProvider } from 'react-apollo'

import configureStore from '../configureStore'
import configureApolloClient from '../configureApolloClient'

export default class Apollo extends React.Component {

  constructor(props) {
    super(props)
    this.client = configureApolloClient()
    this.store = configureStore(this.client, {})
  }

  render() {
    return (
      <ApolloProvider client={this.client} store={this.store}>
        <div>
          {this.props.children}
        </div>
      </ApolloProvider>
    )
  }
}