import { graphql, compose } from 'react-apollo'
import findUserByAuth0Id from './findUserByAuth0Id'

export default compose(
  graphql(findUserByAuth0Id, {
    props: (props) => ({
      user: props.data.User
    })
  })
)