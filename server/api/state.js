import _ from 'lodash';
import errors from './errors';
import express from 'express';
import store from '../redux/store';

const api = express.Router();

/*
 * Retrieves the user information
 */
api.get('/', (req, res) => {
  const state = store.getState().toJS();
  state.users.active_users_by_id = _.mapValues(state.users.active_users_by_id, user => _.omit(user, 'socket'));
  state.client.chat.sockets_by_user = _.mapValues(state.client.chat.sockets_by_user, socket => socket.id);
  
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(state, null, 2));
});

module.exports = api;