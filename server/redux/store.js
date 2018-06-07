import {applyMiddleware, compose, createStore} from 'redux';

import {Iterable} from 'immutable';
import {createEpicMiddleware} from 'redux-observable';
import {createLogger} from 'redux-logger';
import rootEpic from './epics';
import rootReducer from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const reduxLoggerMiddleware = createLogger({ 
  stateTransformer: (state) => {
    if (Iterable.isIterable(state)) {
      return state.toJS();
    }

    return true;
  },
  collapsed: true 
});

const store = createStore(rootReducer,
  compose(
    applyMiddleware(epicMiddleware)
  )
);

export default store;
