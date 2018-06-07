import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import user from './user/reducers';

export default combineReducers(fromJS({
  user
}));