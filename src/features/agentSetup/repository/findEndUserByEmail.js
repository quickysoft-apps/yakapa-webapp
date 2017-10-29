import gql from 'graphql-tag'

export default gql`
  query findEndUserByEmail($email: String!) {
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
