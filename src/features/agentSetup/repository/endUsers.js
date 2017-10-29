import { graphql, compose } from 'react-apollo'
import findEndUserByEmail from './findEndUserByEmail'
import createEndUser from './createEndUser'
import attachUserToEndUser from './attachUserToEndUser'

export default compose(
  graphql(findEndUserByEmail, {
    skip: (props) => {
      return (!props.email || props.email === '')
    },
    props: (props) => {
      return { 
        findEndUserByEmail: props.data 
      }
    }
  }),
  graphql(createEndUser, {
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
  }),
  graphql(attachUserToEndUser, {
    props: (props) => ({
      attachUserToEndUser: (user, endUser) => {
        return props.mutate({
          variables: { endUserId: endUser.id, userId: user.id },
          refetchQueries: [{ query: findEndUserByEmail, variables: { email: props.ownProps.email } }]
        })
      }
    })
  })
)