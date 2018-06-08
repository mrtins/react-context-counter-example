import React, { Component } from 'react';

import { Consumer } from '../providers/CounterProvider';

export default class Reset extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(counter) => (
            <div>
              <button onClick={counter.resetCounter}>Reset</button>
            </div>
          )}
        </Consumer>
      </div>
    )
  }
}
