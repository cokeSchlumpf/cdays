import _ from 'lodash';
import actions from '../redux/actions';
import store from '../redux/store';
import uuid from 'uuid/v4';

export default (req, res, next) => {
  const user = _.get(req, 'session.user');

  if (!user || !user.id) {
    const newUser = {
      type: 'anonym',
      id: `anonym_${uuid()}`
    };

    store.dispatch(actions.users.create(newUser));
    _.set(req, 'session.user', newUser);
  } else if (!_.get(store.getState().toJS(), `users.active_users_by_id.${user.id}`)) {
    store.dispatch(actions.users.create(user));
  }

  _.set(req, 'user', _.get(req, 'session.user'));

  next();
}