import React, { Component } from 'react';

export default class Navbar extends Component {

  render () {
    return (
      <nav>
        <h3># channelname goes here</h3>
        <form className="form-group">
          <input type="text" placeholder="Enter your name" className="form-control" />
        </form>
      </nav>
    );
  }
}
