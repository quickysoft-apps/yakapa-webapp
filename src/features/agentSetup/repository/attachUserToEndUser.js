import gql from 'graphql-tag'

export default gql`
  mutation attachUserToEndUser($endUserId: ID!, $userId: ID!) {
    addToUserOnEndUser(endUsersEndUserId: $endUserId, usersUserId: $userId) {
      usersUser {
        id
      }
    }
  }`