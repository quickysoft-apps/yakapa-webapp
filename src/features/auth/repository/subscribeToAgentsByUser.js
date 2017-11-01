import gql from 'graphql-tag'

export default gql`
  subscription agents($userId: ID!) {
    Agent(filter: {node: {endUser: {users_some: {id: $userId}}}}) {
      mutation
      node {
        tag
        nickname
        endUser {
          users {
            id
          }
        }
      }
    }
  }
`
