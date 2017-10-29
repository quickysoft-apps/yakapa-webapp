import ApolloClient, { createNetworkInterface } from 'apollo-client'
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws'
//import { addGraphQLSubscriptions } from 'add-graphql-subscriptions'

const GRAPHCOOL_YAKAPA_ID = 'Yakapa'//'cixri1w220iji0121r8lr0n69'

export default () => {

  const networkInterface = createNetworkInterface({
    uri: `https://api.graph.cool/simple/v1/${GRAPHCOOL_YAKAPA_ID}`,
    opts: {
      credentials: 'same-origin'
    }
  })

  const subscriptionClient = new SubscriptionClient(`wss://subscriptions.graph.cool/v1/${GRAPHCOOL_YAKAPA_ID}`, {
    reconnect: true,
    timeout: 90000,
    connectionCallback: (error) => {
      if (error) {
        console.log('SubscriptionClient error', error)
      }
    }
  })

subscriptionClient.onConnected(() => {
    console.info('Subscription Client connected.')
  })

  subscriptionClient.onDisconnected(() => {
    console.warn('Subscription Client disconnected.')
  })

  subscriptionClient.onConnecting(() => {
    console.info('Subscription Client connecting...')
  })

  subscriptionClient.onReconnecting(() => {
    console.info('Subscription Client reconnecting...')
  })

  subscriptionClient.onReconnected(() => {
    console.info('Subscription Client reconnected.')
  })



  const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
    networkInterface,
    subscriptionClient
  )

  const client = new ApolloClient({
    networkInterface: networkInterfaceWithSubscriptions,
    dataIdFromObject: o => o.id
  })

  return client
}