import express from 'express';
import messages from './messages';
import state from './state';
import user from './user';

const api = express.Router();

api.use('/messages', messages);
api.use('/state', state);
api.use('/user', user);

export default api;

