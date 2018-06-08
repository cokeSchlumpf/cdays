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

  store.dispatch(actions.client.chat.eventToClient({ message }));
  res.sendStatus(200);
});

api.get('/', (req, res) => {
  // store.dispatch(actions.client.chat.eventToClient({ message: 'TEST MESSAGE' }));

  store.dispatch(actions.services.users.addTimelineentry('andre', {
    type: 'letter',
    subject: 'Eingang unterzeichneter Vertrag',
    date: '2012-03-10',
    agent: 'Sam Schaufelberg',
    action: false,
    labels: ['Motorradversicherung', 'Vertragseingang']
  }));

  res.sendStatus(200);
});

api.get('/user-message', (req, res) => {
  store.dispatch({
    type: 'COMPONENTS_CHAT_BOT_MESSAGE',
    broadcast: true,
    payload: {
      message: 'Hello World!',
      sender: 'Egon Olsen'
    }
  });

  store.dispatch({
    type: 'COMPONENTS_CHAT_BOT_MESSAGE',
    broadcast: true,
    payload: {
      message: 'Hallo lieber Andre!',
      sender: 'user'
    }
  });

  store.dispatch({
    type: 'COMPONENTS_CHAT_BOT_MESSAGE',
    broadcast: true,
    payload: {
      message: 'Jo!',
      sender: 'Egon Olsen'
    }
  });

  res.sendStatus(200);
});

api.get('/show-chat', (req, res) => {
  store.dispatch({
    type: 'COMPONENTS_CHAT_WINDOW_SHOW',
    broadcast: true,
    payload: {}
  });

  res.sendStatus(200);
});



module.exports = api;