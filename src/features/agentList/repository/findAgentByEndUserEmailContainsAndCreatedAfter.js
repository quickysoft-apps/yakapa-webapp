import gql from 'graphql-tag'

export default gql`
  query getAgents($emailContains: String, $agentUpdatedAfter: DateTime) {
    allAgents(orderBy: updatedAt_ASC, filter: {       
      updatedAt_gte: $agentUpdatedAfter, 
      endUser: {
        email_contains: $emailContains
      }
    }) 
    {
      id
      updatedAt
      nickname
      endUser {
        email
      }
    }
  }`