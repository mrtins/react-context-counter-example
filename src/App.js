import React, { Component } from 'react';

import CounterProvider from './providers/CounterProvider';
import Count from './components/Count'
import Uncount from './components/Uncount';

export default class App extends Component {
  render() {
    return (
      <CounterProvider>
        <div>
          <CounterProvider.Consumer>
            {(consumer) => (
              <div>
                <p>consumer.counter</p>
              </div>
            )}
          </CounterProvider.Consumer>

          <Count />
          <Uncount />
        </div>
      </CounterProvider>
    );
  }
}
