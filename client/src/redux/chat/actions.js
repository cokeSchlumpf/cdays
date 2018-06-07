import _ from 'lodash';
import constantsFromArray from '../../utils/constants-from-array';

export const types = constantsFromArray([
  'CONNECT',

  'INIT',
  'INIT_SUCCESS',

  'RECEIVE',
  'REGISTER_CLIENT',
  'SEND',
  'SEND_SUCCESS',
  'SEND_FAIL'
], 'CHAT_');

export const connect = (payload) => (
  { type: types.INIT, payload }
);

export const init = (userId) => (
  { type: types.INIT, payload: { user_id: userId } }
);

export const initSuccess = (socket) => (
  { type: types.INIT_SUCCESS, payload: { socket } }
);

export const receive = (message) => (
  { type: types.RECEIVE, payload: message }
);

export const registerClient = (userId, reconnect = false) => (
  { type: types.REGISTER_CLIENT, payload: { user_id: userId, reconnect }, server: true }
);

export const send = (message) => {
  if (_.isString(message)) {
    return { type: types.SEND, payload: { message }, server: true };
  } else if (_.isObject(message)) {
    return { type: types.SEND, payload: message, server: true };
  }
}

export const sendFail = (error) => (
  { type: types.SEND_FAIL, payload: error }
);

export const sendSuccess = (payload) => (
  { type: types.SEND_SUCCESS, payload }
);

export default {
  connect,
  init,
  initSuccess,
  receive,
  registerClient,
  send,
  sendFail,
  sendSuccess
}