// Code DelayedButton Component Here

import React, { Component } from 'react'

export default class DelayedButton extends Component {

  constructor(props) {
    super(props);
    this.onDelayedClick = this.sayHello.bind(this, this.props.delay);
  }

  onDelayedClick(event, delay) {

  }

  render() {
    return (
    <div>
      <button onClick={this.onDelayedClick}>Submit</button>
    </div>
    )
   }
}
