import user, { types as userTypes } from './user/actions';
import users, { types as usersTypes } from './users/actions';

export const types = {
  user: userTypes,
  users: usersTypes
};

export default {
  user,
  users
};