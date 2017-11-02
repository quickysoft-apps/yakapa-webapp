import { graphql, compose } from 'react-apollo'
import createUser from './createUser'

export default compose(
  graphql(createUser, { name: 'createUser' })
)
