import React, { Component } from 'react';
import { Link } from 'react-router';

const HARDCODED_CHANNEL_VALUE = '/channels/1';

export default class ChannelList extends Component {

  render () {
    return (
      <ul>
        <li>
          <Link to={HARDCODED_CHANNEL_VALUE}>
            <span># really random</span>
            <span className="badge">8</span>
          </Link>
        </li>
        <li>
          <Link to={HARDCODED_CHANNEL_VALUE}>
            <span># generally speaking</span>
            <span className="badge">2</span>
          </Link>
        </li>
        <li>
          <Link to="/new-channel">Create a channel...</Link>
        </li>
      </ul>
    );
  }
}
