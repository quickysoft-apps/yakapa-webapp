import gql from 'graphql-tag'

export default gql`
  query findUserIdByAuth0Id($auth0UserId: String!) {
    User(auth0UserId: $auth0UserId) {
      id
    }
  }`