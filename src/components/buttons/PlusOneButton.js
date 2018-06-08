import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { CounterConsumer } from '../../providers/CounterProvider';

export default class PlusOneButton extends Component {
  render() {
    return (
      <div>
        <CounterConsumer>
          {(counter) => (
            <div style={this.styles.paddingButton}>
              <Button bsStyle="primary" onClick={counter.plusOne}>+++</Button>
            </div>
          )}
        </CounterConsumer>
      </div>
    )
  }

  styles = {
    paddingButton: {
      padding: '15px',
    }
  }
}
