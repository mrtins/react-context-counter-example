import React, { Component, forwardRef } from 'react';
import { Button } from 'react-bootstrap';

import { CounterConsumer } from '../../providers/CounterProvider';

export default class PlusOneButton extends Component {
  constructor(props) {
    super(props);
    console.log('PlusOneButton', this.props);
  }

  componentDidUpdate() {
    console.log('this.props', this.props);
  }

  render() {
    return (
      <div>
        <div style={this.styles.paddingButton}>
          <Button bsStyle="primary" onClick={this.props.counter.plusOne}>+++</Button>
        </div>
      </div>
    )
  }

  styles = {
    paddingButton: {
      padding: '15px',
    }
  }
}
