import {
  Route,
  Switch,
} from 'react-router-dom';

import App from './components/App';
import NotFound from './components/NotFound';
import React from 'react';
import { ConnectedRouter as Router } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory();

const Routes = (props) => (
  <Router history={history} {...props}>
    <App>
      <Switch>
        <Route path='/' component={App} />
        <Route path='*' component={NotFound} />
      </Switch>
    </App>
  </Router>
);

export default Routes;
