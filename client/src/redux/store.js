import { applyMiddleware, compose, createStore } from 'redux';

import { Iterable } from 'immutable';
import actions from './actions';
import { createEpicMiddleware } from 'redux-observable';
import { createLogger } from 'redux-logger';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { history } from '../routes';
import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const routerMiddleware = createRouterMiddleware(history);

const reduxLoggerMiddleware = createLogger({ 
  stateTransformer: (state) => {
    if (Iterable.isIterable(state)) {
      return state.toJS();
    };

    return true;
  },
  collapsed: true 
});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(rootReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware, routerMiddleware, reduxLoggerMiddleware)
  )
);

store.dispatch(actions.app.init());

export default store;
