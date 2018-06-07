import { combineEpics } from 'redux-observable';
import doodyChat from '../../components/DoodyChat/redux/epics'
import chat from '../../components/Chat/redux/epics'

export default combineEpics(
    ...doodyChat,
    ...chat
);