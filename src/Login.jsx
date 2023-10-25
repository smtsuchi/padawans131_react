import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <form onSubmit={this.logMeIn}>
                <input placeholder='enter your username' name='username' />
                <button>Login</button>
            </form>
        )
    }
}
