import 'rxjs';

import actions, { types } from './actions';

import _ from 'lodash';
import config from 'config';
import rp from 'request-promise';
import winston from 'winston';

export default [
  (action$, store$) => action$
    .ofType(types.SEND)
    .mergeMap(action => {
      if (config.get('environment') !== 'dev') {
        const options = {
          uri: 'https://openwhisk.ng.bluemix.net/api/v1/web/wellnr_dev/travelbuddy-api/core-input',
          headers: {
            'X-Auth-Token': 'foo-bar',
            'Content-Type': 'application/json',
            'Accept': 'text/html, application/json'
          },
          method: 'POST',
          json: {
            user_id: action.payload.user_id,
            message: action.payload.message
          }
        };

        return rp(options)
          .then(actions.sendSuccess(action.payload.user_id))
          .catch(actions.sendFail(action.payload.user_id));
      } else {
        
        return new Promise(resolve => {
          setTimeout(() => {
            resolve('OK');
            
            setTimeout(() => {
              store$.dispatch(actions.receive(action.payload.user_id, { mark_seen: true }));
              setTimeout(() => {
                store$.dispatch(actions.receive(action.payload.user_id, { typing_on: true }));
                setTimeout(() => {
                  store$.dispatch(actions.receive(action.payload.user_id, 'Lorem ipsum dolor sit amet del quarom.'));
                  store$.dispatch(actions.receive(action.payload.user_id, { typing_on: true }));
                  setTimeout(() => {
                    store$.dispatch(actions.receive(action.payload.user_id, 'Foo bar sel danum.'));
                  }, 2000)
                }, 3000);
              }, 1000);
            }, 3000);    
          }, 3000);
        }).then(actions.sendSuccess(action.payload.user_id));
      }
    }),

  (action$, store$) => action$
    .ofType(types.SEND_FAIL)
    .filter(action => {
      console.log(action.payload)
      return false;
    }),

  (action$, store$) => action$
    .filter(action => action.broadcast)
    .flatMap(action => {
      const sockets = _.values(_.get(store$.getState().toJS(), 'client.chat.sockets_by_user', {}));

      _.each(sockets, socket => {
        const clientAction = _.assign(
          {}, _.pick(action, 'action', 'payload'), { type: action.type });

        socket.emit('server_action', clientAction);
      });

      return [];
    }),

  (action$, store$) => action$
    .filter(action => action.client)
    .flatMap(action => {
      const socket = _.get(store$.getState().toJS(), `client.chat.sockets_by_user.${action.user_id}`, action.socket);
      const clientAction = _.assign(
        {}, _.pick(action, 'action', 'payload'), { type: action.type.substring(_.size('CLIENT_')) });

      if (socket) {
        socket.emit('server_action', clientAction);
      } else {
        winston.warn(`Unable to send actiont to socket. No socket found for user ${action.user_id}`);
      }
      return [];
    })
]