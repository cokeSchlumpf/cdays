import app from './app/epics';
import client from './client/epics';
import {combineEpics} from 'redux-observable';
import users from './users/epics';

export default combineEpics(
  ...app,
  ...client,
  ...users
);