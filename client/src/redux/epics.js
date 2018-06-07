import app from './app/epics';
import chat from './chat/epics';
import { combineEpics } from 'redux-observable';
import components from './components/epics';
import services from './services/epics';

export default combineEpics(
  ...app,
  ...chat,
  ...components,
  ...services
);