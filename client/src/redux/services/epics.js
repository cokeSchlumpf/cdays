import _ from 'lodash';
import user from './user/epics';
import users from './users/epics';

export default _.concat(
  user,
  users);