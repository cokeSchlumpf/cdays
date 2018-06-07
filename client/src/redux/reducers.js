import app from './app/reducers';
import chat from './chat/reducers';
import combineReducers from 'redux-immutable-combine-reducers';
import components from './components/reducers';
import { fromJS } from 'immutable';
import { routerReducer as router } from 'react-router-redux';
import services from './services/reducers';

export default combineReducers(fromJS({
  app,
  chat,
  components,
  router,
  services
}));