import { combineEpics } from 'redux-observable';
import doodyChat from '../../components/DoodyChat/redux/epics'

export default combineEpics(
  ...doodyChat
);