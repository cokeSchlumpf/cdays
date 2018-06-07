import constantsFromArray from '../../utils/constants-from-array';

export const types = constantsFromArray([
  'CREATE'
], 'USERS_');

export const create = (user) => (
  {type: types.CREATE, payload: {user}}
);

export default {
  create
}