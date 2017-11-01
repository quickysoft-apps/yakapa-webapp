import { graphql, compose } from 'react-apollo'
import findAgentsByUser from './findAgentsByUser'
import subscribeToAgentsByUser from './subscribeToAgentsByUser'

export default compose(
  graphql(findAgentsByUser, {
    options: (props) => {
      return {
        variables: { userId: props.userId }
      }
    },
    props: (props) => {
      return {
        subscribeToNewAgents: (params) => {
          return props.data.subscribeToMore({
            document: subscribeToAgentsByUser,
            variables: { userId: params.userId },
            onError: (err) => {
              console.error('An error occured while being subscribe to agents: ', err)
            }
          })
        },
        findAgentsByUser: props.data
      }
    }
  })
)