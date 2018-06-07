import { fromJS } from 'immutable';
import { types } from './actions';

export const initialState = fromJS({
  user: undefined
});

const init_success = (state, user) => {
  return state.setIn(['user'], user);
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.INIT_SUCCESS:
    return init_success(state, action.payload);
    default:
      return state;
  }
};
