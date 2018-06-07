import { fromJS } from 'immutable';
import { types } from './actions';

export const initialState = fromJS({
  connect_messages: 0,
  socket: undefined,
});

const connect = (state, payload) => {
  return state
    .updateIn(['connect_messages'], count => count + 1);
}

const initSuccess = (state, { socket }) => {
  return state.setIn(['socket'], socket);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CONNECT:
      return connect(state, action.payload);
    case types.INIT_SUCCESS:
      return initSuccess(state, action.payload);
    default:
      return state;
  }
};
