import React, { Component } from 'react';
import { hashHistory } from 'react-router';

export default class NewChannel extends Component {

  render () {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="name">Create a Channel</label>
          <input className="form-control" type="text" name="name" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default">Create Channel</button>
        </div>
      </form>
    );
  }
}
