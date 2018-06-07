import 'rxjs';

import { types } from './actions';
import winston from 'winston';

export default [
  (action$, store$) => action$
    .filter(action => {
      winston.info(`action ${action.type}`);
      return false;
    })
]