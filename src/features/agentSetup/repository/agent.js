import { graphql, compose } from 'react-apollo'
import createAgent from './createAgent'

export default compose(
  graphql(createAgent, {
    props: (props) => ({
      createAgent: (endUserId) => {
        return props.mutate({ variables: { endUserId } })
      }
    })
  })
)