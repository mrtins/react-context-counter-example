import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class MinusFiveButton extends Component {
  render() {
    return (
      <div>
        <div style={this.styles.paddingButton} >
          <Button bsStyle="primary" onClick={this.props.minusFive}>-5</Button>
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
