import 'rxjs';

import { initFail, initSuccess } from './actions';

import FetchClient from '../../../utils/fetch-client';
import { types } from './actions';

const service = new FetchClient('/api/v1/user');

export const initEpic = (action$) => action$
  .ofType(types.INIT)
  .mergeMap(action => service
    .read()
    .then(initSuccess)
    .catch(initFail));

export const initSuccessEpic = (action$, store$) => action$
  .ofType(types.INIT_SUCCESS)
  .filter(action => false);

export default [
  initEpic,
  initSuccessEpic
]