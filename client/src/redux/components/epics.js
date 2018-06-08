import _ from 'lodash';
import chat from '../../components/Chat/redux/epics'
import { combineEpics } from 'redux-observable';

export default _.concat(
  chat);