import combineReducers from 'redux-immutable-combine-reducers';
import doodyChat from '../../components/DoodyChat/redux/reducers'
import { fromJS } from 'immutable';

export default combineReducers(fromJS({
  doodyChat
}));