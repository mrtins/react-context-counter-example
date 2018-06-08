import React, { Component } from 'react';

const counterContext = React.createContext();
const Provider = counterContext.Provider;

export const CounterConsumer = counterContext.Consumer;

export default class CounterProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      plusOne: this.plusOne,
      minusOne: this.minusOne,
      minusFive: this.minusFive,
      resetCounter: this.resetCounter
    }
  }

  plusOne = () => {
    this.setState({ counter: this.state.counter + 1 });
  }

  minusOne = () => {
    this.setState({ counter: this.state.counter - 1 });
  }

  minusFive = () => {
    this.setState({ counter: this.state.counter - 5 });
  }

  render() {
    return (
      <Provider value={this.state}>
        {this.props.children}
      </Provider>
    )
  }
}
