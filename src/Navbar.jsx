import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

class Navbar extends Component {
  
  render() {  
    console.log('navbar is rendering')
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Finstagram</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/posts">Posts</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Current User: {this.props.user}</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
};
export default Navbar;
