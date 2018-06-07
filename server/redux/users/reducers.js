import {fromJS} from 'immutable';
import {types} from './actions';

export const initialState = fromJS({
  active_users_by_id: {}
});

const create = (state, {user}) => {
  return state.updateIn(['active_users_by_id'], users => users.set(user.id, fromJS(user)));
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.CREATE:
      return create(state, action.payload);
    default:
      return state;
  }
};
