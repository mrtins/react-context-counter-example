import React, { Component } from 'react';

import { Context as Provider } from './Context';

export default class CounterProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      plusOne: this.plusOne,
      minusOne: this.minusOne,
      resetCounter: this.resetCounter
    }
  }

  plusOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  minusOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  resetCounter = () => {
    this.setState({ counter: 0 });
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}
