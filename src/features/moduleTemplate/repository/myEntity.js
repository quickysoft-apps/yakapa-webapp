import { graphql, compose } from 'react-apollo'
import myQuery from './myQuery'

export default compose(
  graphql(myQuery, {
    options: (props) => {
      return {
        variables: { param: props.myState }
      }
    },
    props: (props) => {
      return {        
        myQuery: props.data
      }
    }
  })
)