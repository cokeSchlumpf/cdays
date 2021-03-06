import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import user from './user/reducers';
import users from './users/reducers';

export default combineReducers(fromJS({
  user,
  users
}));