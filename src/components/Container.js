import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import CounterProvider from '../providers/CounterProvider';

import Counter from './Counter';
import Count from './buttons/PlusOneButton';
import Uncount from './buttons/MinusOneButton';

export default class Container extends Component {
  render() {
    return (
      <CounterProvider>
        <div style={this.styles.container}>
          <Counter />
          <Count />
          <Uncount />
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
