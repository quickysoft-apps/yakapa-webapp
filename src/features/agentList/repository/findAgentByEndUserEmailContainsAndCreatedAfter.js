import gql from 'graphql-tag'

export default gql`
  query findAgentByEndUserEmailContainsAndCreatedAfter($emailContains: String, $agentUpdatedAfter: DateTime) {
    allAgents(orderBy: updatedAt_ASC, filter: {       
      updatedAt_gte: $agentUpdatedAfter, 
      endUser: {
        email_contains: $emailContains
      }
    }) 
    {
      tag
      updatedAt
      nickname
      endUser {
        email
      }
    }
  }`