import gql from 'graphql-tag'

export default gql`
  mutation createEndUser($email: String!, $fullName: String, $userIds: [ID!]) {
    createEndUser(email: $email, fullName: $fullName, usersIds: $userIds) {
      id      
      users {
        auth0UserId
      }      
    }
  }`