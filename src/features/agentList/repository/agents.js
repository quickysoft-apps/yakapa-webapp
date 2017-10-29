import { graphql, compose } from 'react-apollo'
import subscribeToAgentsByEmailContains from './subscribeToAgentsByEmailContains'
import findAgentByEndUserEmailContainsAndCreatedAfter from './findAgentByEndUserEmailContainsAndCreatedAfter'

export default compose(
  graphql(findAgentByEndUserEmailContainsAndCreatedAfter, {
    name: 'agents',
    props: (props) => {      
      return {
        subscribeToNewAgents: (params) => {
          return props.agents.subscribeToMore({
            document: subscribeToAgentsByEmailContains,
            variables: { emailContains: params.emailContains },
            updateQuery: (previousQueryResult, options) => {
              const agent = options.subscriptionData.data.Agent.node    
              let allAgents = previousQueryResult.allAgents ? [...previousQueryResult.allAgents] : []

              if (options.subscriptionData.data.Agent.mutation === "CREATED") {
                console.debug('Agent added', agent)                
                allAgents = [...allAgents, agent]
              }

              if (options.subscriptionData.data.Agent.mutation === "DELETED") {
                const index = allAgents.findIndex(x => x.id === options.subscriptionData.data.Agent.previousValues.id)
                if (index !== -1) {
                  console.debug('Agent deleted', agent)
                  allAgents.splice(index,1)
                }  
              }
              
              return { allAgents }
            },
            onError: (err) => {
              console.error('An error occured while being subscribe to agents: ', err)
            }
          })
        },
        agents: props.agents
      }
    }
  })
)