import gql from 'graphql-tag'

/*
export default gql`
  subscription agents {
    Agent {
      previousValues {
        id
      }
      mutation
      node {
        id
        updatedAt
        tag
        nickname
      }
    }
  }`
*/


export default gql`
  subscription agents($emailContains: String) {
    Agent(filter: {
      AND: [{
        mutation_in: [CREATED, UPDATED, DELETED]}, 
        {
          node: {
            endUser: {
              email_contains: $emailContains
            }
          }
        }
      ]}) 
      {
      node {
        id
        updatedAt
        tag
        nickname
      }
    }
  }
`
