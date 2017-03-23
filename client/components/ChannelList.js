import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// hardcoded...for now!
const RANDOM_CHANNEL = '/channels/1';
const GENERAL_CHANNEL = '/channels/2';

export default class ChannelList extends Component {

  render () {
    return (
      <ul>
        <li>
          <Link to={RANDOM_CHANNEL}>
            <span># really random</span>
            <span className="badge">0</span>
          </Link>
        </li>
        <li>
          <Link to={GENERAL_CHANNEL}>
            <span># generally speaking</span>
            <span className="badge">0</span>
          </Link>
        </li>
        <li>
          <Link to="/new-channel">Create a channel...</Link>
        </li>
      </ul>
    );
  }
}
