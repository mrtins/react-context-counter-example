import React, { Component } from 'react';

import { CounterConsumer } from '../../providers/CounterProvider';
import PlusOneButton from './PlusOneButton';

export default class Wrapper extends Component {
  render() {
    return (
      <div>
        <CounterConsumer>
          {(counter) => (
            <div>
              <PlusOneButton counter={counter} />
            </div>
          )}
        </CounterConsumer>
      </div>
    )
  }
}
