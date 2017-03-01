import React, { Component } from 'react';
import NewMessage from './NewMessage';
import axios from 'axios';

export default class Messages extends Component {

  constructor () {
    super();
    this.state = { messages: [] };
  }

  componentDidMount () {
    axios.get('api/messages')
      .then(res => res.data)
      .then(messages => this.setState({ messages }));
  }

  render () {

    const channelId = Number(this.props.routeParams.channelId); // because it's a string "1", not a number!
    const messages = this.state.messages;
    const filteredMessages = messages.filter(message => message.channelId === channelId);

    return (
      <div>
        <ul className="media-list">
          { filteredMessages.map(message => <Message message={message} key={message.id} />) }
        </ul>
        <NewMessage />
      </div>
    );
  }
}

// a single message is simple, stateless functional component
function Message (props) {

  const message = props.message;

  return (
    <li className="media">
      <div className="media-left">
        <a href="#">
          <img className="media-object" src={message.author.image} alt="image" />
        </a>
      </div>
      <div className="media-body">
        <h4 className="media-heading">{ message.author.name }</h4>
        { message.content }
      </div>
    </li>
  );
}
