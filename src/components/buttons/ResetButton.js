import React, { Component } from 'react';
import { Button, Col } from 'react-bootstrap';

import { CounterConsumer } from '../../providers/CounterProvider';

export default class ResetButton extends Component {
  render() {
    return (
      <div>
        <CounterConsumer>
          {(counter) => (
            <div style={this.styles.paddingButton} >
              <Button bsStyle="primary" onClick={counter.resetCounter}>Reset</Button>
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
