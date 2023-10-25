import React, { Component } from 'react'

export default class Home extends Component {

    render() {
        return (
            <div>
                <h1>
                    Count: {this.props.count}
                </h1>
                <button onClick={this.props.addToCount}>+</button>
            </div>
        )
    }
}
