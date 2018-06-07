
'use strict'

import _ from 'lodash';
import actions from './redux/actions';
import api from './api';
import bodyParser from 'body-parser';
import cfenv from 'cfenv';
import chalk from 'chalk';
import config from 'config';
import cookieParser from 'cookie-parser';
import express from 'express';
import fs from 'fs';
import health from 'express-healthcheck';
import middleware_authentication from './middleware/authentication';
import morgan from 'morgan';
import msg from 'gulp-messenger';
import path from 'path';
import session from 'express-session';
import socketio from 'socket.io';
import store from './redux/store';
import winston from 'winston';

const app = express();
const appenv = cfenv.getAppEnv();

app.set('port', appenv.isLocal ? config.get('server.port') : appenv.port);
app.set('url', appenv.isLocal ? `http://localhost:${app.get('port')}` : appenv.url);

winston.level = 'debug';

if (config.get('environment') === 'dev') {
  winston.info('configuration values: ', JSON.stringify(config, null, 2));
}

// Some default middleware
// TODO configure morgan based on environment
app.use(morgan(config.get('morganformat')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// TODO
// Setup express application to use express-session middleware
// Must be configured with proper session storage for production
// environments. See https://github.com/expressjs/session for
// additional documentation
app.use(session({
  secret: 'doody-schatzi-und-hippo:)',
  resave: true,
  saveUninitialized: true
}));

app.use(middleware_authentication);

// all static content can be routed if its URL is entered explicitly
app.use(express.static(path.join(__dirname, 'public')));

// healthcheck
app.use('/health', health());

// bind API routes
app.use('/api/v1', api);

// bind error pages
app.get('/:status', (req, res, next) => {
  const filepath = path.resolve(__dirname, 'assets', `HTTP${req.params.status}.html`);

  if (fs.existsSync(filepath)) {
    res.sendFile(filepath);
  }
  else {
    next();
  }
});

// for all other routes see /client/src/routes.js
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});

// error handler
app.use((err, req, res, next) => {
  winston.error('Unhandled error', err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = config.get('environment') === 'dev' ? err : {};

  // render the error page
  res.status(err.status || 500);

  if (config.get('environment') === 'dev') {
    res.json(err);
  }
  else {
    res.sendFile(path.resolve(__dirname, 'assets', `HTTP${err.status || 500}.html`));
  }
});

// lets startup this puppy
const server = app.listen(app.get('port'), () => {
  msg.log('\n')
  const date = new Date();
  const environment = config.get('environment');
  console.log(chalk.cyan(`${appenv.name} [${environment}] started ${date}`));
  msg.log('\n')
  const serverInfo = chalk.yellow(app.get('url'));
  msg.success('=', _.pad(`Application Running On: ${serverInfo}`, 80), '=')
});

// ... and the socket communication
const io = socketio.listen(server);

io.on('connection', socket => {
  store.dispatch(actions.client.chat.connect(socket));

  socket.on('client_action', msg => {
    if (_.isObject(msg) && _.isString(msg.type) && msg.payload) {
      store.dispatch({
        type: `CLIENT_${msg.type}`,
        payload: _.assign({}, msg.payload, {
          socket,
          user_id: _.get(store.getState().toJS(), `client.chat.active_users_by_socket.${socket.id}`, msg.payload.user_id)
        })
      });
    }
  });

  socket.on('disconnect', () => {
    store.dispatch(actions.client.chat.disconnect(socket,  _.get(store.getState().toJS(), `client.chat.active_users_by_socket.${socket.id}`)));
  });
});

export default app;