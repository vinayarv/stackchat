import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// hardcoded...for now!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';

export default class ChannelList extends Component {

  render () {
    return (
      <ul>
        <li>
          <NavLink to={RANDOM_CHANNEL} activeClassName="active">
            <span># really random</span>
            <span className="badge">0</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={GENERAL_CHANNEL} activeClassName="active">
            <span># generally speaking</span>
            <span className="badge">0</span>
          </NavLink>
        </li>
      </ul>
    );
  }
}
