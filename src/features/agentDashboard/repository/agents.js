
import React from 'react'
import { graphql, compose } from 'react-apollo'
import subscribeToAgentsByTag from './subscribeToAgentsByTag'

export default class AgentsSubscription extends React.Component {

    componentWillMount() {
        console.log('------------------------', this.props)
    }
}