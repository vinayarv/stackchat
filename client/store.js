import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import axios from 'axios';

// ACTION TYPES
const GOT_MESSAGES_FROM_SERVER = 'GOT_MESSAGES_FROM_SERVER';
const WRITE_MESSAGE = 'WRITE_MESSAGE';
const GOT_NEW_MESSAGE_FROM_SERVER = 'GOT_NEW_MESSAGE_FROM_SERVER';

const initialState = {
  messages: [],
  newMessageEntry: ''
}

function reducer (prevState = initialState, action) {
  switch (action.type) {
    case GOT_MESSAGES_FROM_SERVER:
       return Object.assign({}, prevState, { messages: action.messages });
    case WRITE_MESSAGE:
          return Object.assign({}, prevState, {newMessageEntry: action.newMessageEntry });
    case GOT_NEW_MESSAGE_FROM_SERVER:
      return Object.assign({}, prevState, {messages: prevState.messages.concat(action.message)});
    default:
       return prevState;
  }
}

export function fetchMessages() {
  return function thunk (dispatch) {
   return axios.get('/api/messages')
      .then(res => res.data)
      .then(messages => {
        const action = gotMessagesFromServer(messages);
        // note that we can just "dispatch", rather than "store.dispatch"
        dispatch(action);
      });
  };
}

// ACTION CREATORS
export const gotMessagesFromServer = ( messages ) => {
  return {
    type: GOT_MESSAGES_FROM_SERVER,
    messages
  }
};

export const writeMessage = ( message ) => {
  return {
    type: WRITE_MESSAGE,
    newMessageEntry: message
  }
};

export const gotNewMessageFromServer = ( message ) => {
  return {
    type: GOT_NEW_MESSAGE_FROM_SERVER,
    message: message
  }
};

//review question: Why export const does not work?
const store = createStore(reducer, applyMiddleware(loggerMiddleware, thunkMiddleware));
export default store;



