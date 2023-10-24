import React, { Component } from 'react'
import Navbar from './Navbar';
import './shoha.css'

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      count: 0,
      user: null
    }
    console.log('i am constructing')
  }

  addToCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  logMeIn = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    this.setState({user: username})
  };

  componentDidMount(){
    console.log('i have just mounted')
  }

  render() {
    console.log('i am rendering')
    return (
      <div>
        <Navbar user={this.state.user}/>
        <h1>
          Count: {this.state.count}
        </h1>
        <button onClick={this.addToCount}>+</button>



        <form onSubmit={this.logMeIn}>
          <input placeholder='enter your username' name='username'/>
          <button>Login</button>
        </form>

      </div>
    )
  }
}