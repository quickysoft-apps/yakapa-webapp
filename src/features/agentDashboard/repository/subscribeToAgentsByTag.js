import gql from 'graphql-tag'

export default gql`
subscription agentsByTag($tag: String!) {
  Agent(filter: {mutation_in: [UPDATED], node: {tag: $tag}}) {
    node {
      nickname
    }
  }
}
`
