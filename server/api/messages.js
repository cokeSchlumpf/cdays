import _ from 'lodash';
import actions from '../redux/actions';
import errors from './errors';
import express from 'express';
import store from '../redux/store';

const api = express.Router();

/*
 * Retrieves the user information
 */
api.post('/', (req, res) => {
  const user_id = req.body.user_id;
  const message = req.body.message;

  if (!user_id || !_.isString(user_id)) {
    errors.E001_MissingRequiredFields({ user_id: 'string' }).send(res);
  } else if (!message || (!_.isString(message) && !_.isObject(message))) {
    errors.E001_MissingRequiredFields({ message: 'string || object' }).send(res);
  } else {
    store.dispatch(actions.client.chat.receive(user_id, message))
    res.sendStatus(200);
  }  
});

module.exports = api;