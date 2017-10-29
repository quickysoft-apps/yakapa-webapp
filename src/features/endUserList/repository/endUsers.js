import { graphql, compose } from 'react-apollo'
import findEndUsersByUser from './findEndUsersByUser'

export default compose(
  graphql(findEndUsersByUser, {
      props: ({ data }) => ({
        findEndUsersByUser: data
      })
  })
)