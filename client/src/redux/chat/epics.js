import 'rxjs';

import actions, { types } from '../actions';

import _ from 'lodash';
import io from 'socket.io-client';

export default [
  // initialize chat epic
  (action$, store$) => action$
    .ofType(types.chat.INIT)
    .flatMap(action => {
      const socket = io();

      socket.on('server_action', message => {
        if (_.isObject(message) && _.isString(message.type) && message.payload) {
           store$.dispatch(message);
        } else {
          console.log('Unkown message from server:')
          console.log(message);
        }
      });
      
      return [
        actions.chat.initSuccess(socket),
        actions.chat.registerClient(action.payload.user_id)
      ];
    }),

  (action$, store$) => action$
    .ofType(types.chat.CONNECT) 
    .flatMap(action => {
      const state = store$.getState().toJS();
      const user_id = _.get(state, 'services.user.user.id');
      const count = _.get(state, 'chat.connect_messages', 0);

      if (user_id && count > 1) {
        return [
          actions.chat.registerClient(user_id, true)
        ] 
      } else if (count > 1) {
        console.log('Unable to register client, unkown user_id');
        return [];
      } else {
        return [];
      }
    }),

  // forward actions to server
  (action$, store$) => action$
    .filter(action => action.server)
    .flatMap(action => {
      const socket = _.get(store$.getState().toJS(), 'chat.socket');

      if (socket) {
        socket.emit('client_action', action);
      } else {
        console.warn('Unable to send message to server: No socket stored in state.');
      }

      return [];
    })
]