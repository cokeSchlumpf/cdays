import app, { types as appTypes } from './app/actions';
import client, { types as clientTypes } from './client/actions';
import services, { types as servicesTypes } from './services/actions';
import users, { types as usersTypes } from './users/actions';

export const types = {
  app: appTypes,
  client: clientTypes,
  services: servicesTypes,
  users: usersTypes
}

export default {
  app,
  client,
  services,
  users
}