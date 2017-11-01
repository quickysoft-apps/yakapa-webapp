import { graphql, compose } from 'react-apollo'
import createUser from './createUser'

export default compose(  
  graphql(createUser, {
    name: 'createUser',
    props: (props) => ({
      createEndUser: (email, fullName, userId) => {
        const userIds = [userId]
        return props.mutate({
          variables: { email, fullName, userIds },
          refetchQueries: [{ query: findEndUserByEmail, variables: { email: props.ownProps.email } }]
        })
      }
    }
    )
  })
)

graphql(MUTATION_CREATE_USER, { name: 'createUser' })(Container)