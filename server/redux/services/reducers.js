import combineReducers from 'redux-immutable-combine-reducers';
import { fromJS } from 'immutable';
import users from './users/reducers';

export default combineReducers(fromJS({
  users 
}));