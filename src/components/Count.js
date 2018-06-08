import React, { Component } from 'react';

import { Consumer } from '../providers/CounterProvider';

export default class Count extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(counter) => (
            <div>
              <button onClick={counter.plusOne}>+++</button>
            </div>
          )}
        </Consumer>
      </div>
    )
  }
}
