import gql from 'graphql-tag'

export default gql`
  query getEndUser($email: String!) {
    EndUser(email: $email) {
      id
      email
      fullName
      agents {
        createdAt
        tag
        nickname
      }
    }
  }`
