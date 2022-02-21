// Code CoordinatesButton Component Here

import React, { Component } from 'react'

export default class CoordinatesButton extends Component {

    constructor(prop) {
        super(prop);
        this.onReceiveCoordinates = this.onReceiveCoordinates.bind(this);
    }

    onReceiveCoordinates(event) {
        const x = event.clientX;
        const y = event.clientY;
        const mouseCoordinates = [x,y];
        this.props.onReceiveCoordinates(mouseCoordinates);
    }
    
    render() {
        return (
        <div>
            <button onClick={this.onReceiveCoordinates}>Submit</button>
        </div>
        )
    }
}

