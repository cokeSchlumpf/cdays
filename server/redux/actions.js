import app, { types as appTypes } from './app/actions';
import client, { types as clientTypes } from './client/actions';
import users, { types as usersTypes } from './users/actions';

export const types = {
  app: appTypes,
  client: clientTypes,
  users: usersTypes
}

export default {
  app,
  client,
  users
}