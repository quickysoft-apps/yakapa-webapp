import gql from 'graphql-tag'

export default gql`
  query findAgentsByUser($userId: ID!) {
      allAgents(filter: {endUser: {users_some: {id: $userId}}}) {
      nickname
      tag
      }
  }
`