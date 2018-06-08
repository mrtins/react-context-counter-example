import React, { Component } from 'react';

import { CounterConsumer } from '../providers/CounterProvider';

export default class Counter extends Component {
  render() {
    return (
      <div>
        <CounterConsumer>
          {(counter) => (
            <div>
              <h1>{counter.counter}</h1>
            </div>
          )}
        </CounterConsumer>
      </div>
    )
  }
}
