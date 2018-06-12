import React, { Component } from 'react';

import CounterProvider from '../providers/CounterProvider';

import Counter from './Counter';
import MinusButton from './buttons/MinusButton';
import Wrapper from './buttons/Wrapper';

export default class Container extends Component {
  render() {
    return (
      <div>
        <CounterProvider>
          <div style={this.styles.container}>
            <Counter />
            <Wrapper />
            <MinusButton />
          </div>
        </CounterProvider>
      </div>
    )
  }

  styles = {
    container: {
      margin: '0 auto',
      textAlign: 'center'
    },
  }
}
