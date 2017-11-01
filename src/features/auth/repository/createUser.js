import gql from 'graphql-tag'

export default gql`
  mutation createUser($idToken: String!, $tag: String!) {
    createUser(tag: $tag, authProvider: {auth0: {idToken: $idToken}}) {
      id
    }
  }
`