// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import { composeWithDevTools } from 'redux-devtools-extension';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';
import MessageListReducer from './reducers/message_list_reducer';
import ChannelsReducer from './reducers/channels_reducer';
import SelectedChannelReducer from './reducers/selected_channel_reducer';
import CurrentUsernameReducer from './reducers/current_username_reducer';

// State and reducers
const initialState = {
  messageList: [
    {
      "author":"anonymous92",
      "content":"Hello world!",
      "created_at":"2017-09-26T23:03:16.365Z"
    },
    {
      "author":"anonymous77",
      "content":"My name is anonymous77",
      "created_at":"2017-09-26T23:03:21.194Z"
    }
  ],
  channels: ['general', 'react', 'montreal'],
  selectedChannel: 'general',
  currentUsername: prompt('What is your username?') || `anonymous${Math.floor(10 + (Math.random() * 90))}`
};

const reducers = combineReducers({
  messageList: MessageListReducer,
  channels: ChannelsReducer,
  selectedChannel: SelectedChannelReducer,
  currentUsername: CurrentUsernameReducer
});

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(
    applyMiddleware(logger)
  ),
);

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
