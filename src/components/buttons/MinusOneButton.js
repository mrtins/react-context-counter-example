import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { CounterConsumer } from '../../providers/CounterProvider';
import Reset from './ResetButton';

export default class MinusOneButton extends Component {
  render() {
    return (
      <div>
        <CounterConsumer>
          {(counter) => (
            <div>
              <Button bsStyle="primary" onClick={counter.minusOne}>---</Button>
              <Reset />
            </div>
          )}
        </CounterConsumer>
      </div>
    )
  }
}
