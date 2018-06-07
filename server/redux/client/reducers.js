import chat from './chat/reducers';
import combineReducers from 'redux-immutable-combine-reducers';
import {fromJS} from 'immutable';

export default combineReducers(fromJS({
  chat
}));