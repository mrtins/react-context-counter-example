import React, { Component } from 'react';

import { Context as Consumer } from '../providers/Context';

export default class Person extends Component {
  render() {
    return (
      <div>
        <Consumer>
          {(counter) => (
            <div>
              <button onClick={counter.minusOne}>---</button>
            </div>
          )}
        </Consumer>
      </div>
    )
  }
}
