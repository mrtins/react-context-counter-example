import React, { Component } from 'react';

import CounterProvider from '../providers/CounterProvider';

import Counter from './Counter';
import PlusOneButton from './buttons/PlusOneButton';
import MinusButton from './buttons/MinusButton';

export default class Container extends Component {
  render() {
    return (
      <CounterProvider>
        <div style={this.styles.container}>
          <Counter />
          <PlusOneButton />
          <MinusButton />
        </div>
      </CounterProvider>
    )
  }

  styles = {
    container: {
      margin: '0 auto',
      textAlign: 'center'
    },
  }
}
