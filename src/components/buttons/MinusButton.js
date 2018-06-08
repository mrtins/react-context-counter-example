import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { CounterConsumer } from '../../providers/CounterProvider';

import MinusFiveButton from './MinusFiveButton';

export default class MinusButton extends Component {
  render() {
    return (
      <div>
        <CounterConsumer>
          {(counter) => (
            <div>
              <Button bsStyle="primary" onClick={counter.minusOne}>---</Button>
              <MinusFiveButton minusFive={counter.minusFive} />
            </div>
          )}
        </CounterConsumer>
      </div>
    )
  }
}
