import gql from 'graphql-tag'

export default gql`
query findEndUsersByUser($auth0UserId: String!) {
 User(auth0UserId: $auth0UserId) {
   endUsers {      
     email,
     fullName      
   }
 }
}`