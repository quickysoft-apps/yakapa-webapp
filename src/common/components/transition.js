import { VelocityTransitionGroup } from 'velocity-react'
import React from 'react'

export default class Transition extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      children: this.props.children,
      step: 1
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState((prevState, props) => {
      return { step: 0 }
    }, () => {
      this.setState({
        children: this.props.children,
        step: 1
      })
    })
  }

  render() {
    return <div>
      <VelocityTransitionGroup enter={{ animation: 'fadeIn' }} runOnMount>
        {this.state.step === 0 ? undefined : this.state.children}
      </VelocityTransitionGroup>
    </div>
  }


}
