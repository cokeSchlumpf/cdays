import app from './app/reducers';
import client from './client/reducers';
import combineReducers from 'redux-immutable-combine-reducers';
import {fromJS} from 'immutable';
import services from './users/reducers';
import users from './users/reducers';

export default combineReducers(fromJS({
  app,
  client,
  services,
  users
}));