import React, { Component } from 'react';

import CounterProvider, { Consumer } from './providers/CounterProvider';
import Count from './components/Count'
import Uncount from './components/Uncount';

export default class App extends Component {
  render() {
    return (
      <CounterProvider>
        <div>
          <Consumer>
            {(consumer) => (
              <div>
                <p>{consumer.counter}</p>
              </div>
            )}
          </Consumer>

          <Count />
          <Uncount />
        </div>
      </CounterProvider>
    );
  }
}
