import React, { Component } from 'react';

export default class NameEntry extends Component {

  constructor () {
    super();
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (evt) {
    this.setState({ name: evt.target.value });
  }

  render () {
    return (
      <form className="form-group">
        <input type="text" name="name" placeholder="Enter your name" className="form-control" onChange={this.handleChange} />
      </form>
    );
  }
}
