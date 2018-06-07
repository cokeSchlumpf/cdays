import constantsFromArray from '../../utils/constants-from-array';

export const types = constantsFromArray([
  'FOO'
], 'APP_');

export const foo = (payload) => (
  { type: types.FOO, payload }
);

export default {
  foo
}