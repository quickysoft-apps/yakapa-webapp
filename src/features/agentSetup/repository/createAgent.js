import gql from 'graphql-tag'

export default gql`
  mutation createAgent($endUserId: ID!) {
    createAgent(endUserId: $endUserId) {
      endUser {
        id
      }
    }
  }` 