import _ from 'lodash';
import constantsFromArray from '../../../utils/constants-from-array';

export const types = constantsFromArray([
  'CONNECT',
  'DISCONNECT',
  'RECEIVE',
  'REGISTER_CLIENT',
  'SEND',
  'SEND_SUCCESS',
  'SEND_FAIL'
], 'CLIENT_CHAT_');

export const connect = (socket) => (
  { type: types.CONNECT, payload: { }, client: true, socket }
);

export const disconnect = (socket, user_id) => (
  { type: types.DISCONNECT, payload: { socket, user_id } }
);

export const receive = (user_id, message) => {
  if (_.isString(message)) {
    return { type: types.RECEIVE, payload: { message }, user_id, client: true };
  } else if (_.isObject(message)) {
    return { type: types.RECEIVE, payload: { action: message }, user_id, client: true };
  }
}

export const registerClient = (userId, reconnect = false) => (
  { type: types.REGISTER_CLIENT, payload: { user_id: userId, reconnect } }
);

export const send = (message, user_id) => (
  { type: types.SEND, payload: { message, user_id } }
)

export const sendFail = (user_id) => (error) => (
  { type: types.SEND_FAIL, payload: { error }, user_id, client: true }
);

export const sendSuccess = (user_id) => (payload) => (
  { type: types.SEND_SUCCESS, payload, user_id, client: true }
);

export default {
  connect,
  disconnect,
  receive,
  registerClient,
  send,
  sendFail,
  sendSuccess
}