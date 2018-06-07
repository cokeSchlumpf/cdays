import { fromJS } from 'immutable';
import { types } from './actions';

export const initialState = fromJS({
  active_users_by_socket: {},
  sockets_by_user: {}
});

const disconnect = (state, { socket, user_id }) => {
  return state
    .deleteIn(['active_users_by_socket', socket.id])
    .deleteIn(['sockets_by_user', user_id]);
}

const registerSocket = (state, {user_id, socket}) => {
  return state
    .updateIn(['active_users_by_socket'], sockets => sockets.set(socket.id, user_id))
    .updateIn(['sockets_by_user'], sockets => sockets.set(user_id, socket));
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DISCONNECT:
      return disconnect(state, action.payload);
    case types.REGISTER_CLIENT:
      return registerSocket(state, action.payload);
    default:
      return state;
  }
};
