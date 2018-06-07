import constantsFromArray from '../../../utils/constants-from-array';

export const types = constantsFromArray([
  'INIT',
  'INIT_FAIL',
  'INIT_SUCCESS'
], 'USER_');

export const init = () => (
  { type: types.INIT, payload: {} }
);

export const initFail = (error) => (
  { type: types.INIT_FAIL, payload: { error } }
);

export const initSuccess = (payload) => (
  { type: types.INIT_SUCCESS, payload }
);

export default {
  init,
  initFail,
  initSuccess
}