import _ from 'lodash';
import errors from './errors';
import express from 'express';

const api = express.Router();

/*
 * Retrieves the user information
 */
api.get('/', (req, res) => {
  if (req.user) {
    res.json(req.user);
  }
  else {
    res.send(401).end();
  }
});

module.exports = api;