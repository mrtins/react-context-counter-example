import React, { Component, forwardRef } from 'react';
import { Button } from 'react-bootstrap';

import { CounterConsumer } from '../../providers/CounterProvider';

class PlusOneButton extends Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
  }

  componentDidMount() {
  }

  click() {
    this.props.counter.plusOne();
  }

  render() {
    return (
      <div style={this.styles.paddingButton}>
        <Button bsStyle="primary" onClick={this.click}>
          +++
        </Button>
      </div>
    )
  }

  styles = {
    paddingButton: {
      padding: '15px',
    }
  }
}

export default forwardRef((props, ref) => (
  <CounterConsumer>
    {counter => <PlusOneButton {...props} ref={ref} counter={counter} />}
  </CounterConsumer>
));