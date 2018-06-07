import { fromJS } from 'immutable';
import { types } from './actions';

export const initialState = fromJS({
  doodyMessages: [],
  doodyTyping: false,
  doodySeen: false,
  sending: false,
  userMessage: undefined,
});

const doodyAction = (state, { action }) => {
  if (action.typing_on) {
    return state
      .setIn(['doodyTyping'], true)
      .setIn(['doodySeen'], true);
  } else if (action.typing_off) {
    return state.setIn(['doodyTyping'], false);
  } else if (action.mark_seen) {
    return state.setIn(['doodySeen'], true);
  } else {
    return state;
  }
}

const doodyMessage = (state, { message }) => {
  if (message) {
    return state
      .updateIn(['doodyMessages'], messages => messages.push(message))
      .setIn(['doodyTyping'], false)
      .setIn(['doodySeen'], true);
  } else {
    return state;
  }
}

const userMessage = (state, { message }) => {
  return state
    .setIn(['userMessage'], {
      message,
      sent: new Date()
    })
    .setIn(['doodyMessages'], fromJS([]))
    .setIn(['doodySeen'], false)
    .setIn(['sending'], true);
}

const userMessageSuccess = (state) => {
  return state
    .setIn(['sending'], false);
}

export default (state = initialState, action) => {
  switch (action.type) {
    case types.DOODY_ACTION:
      return doodyAction(state, action.payload);
    case types.DOODY_MESSAGE:
      return doodyMessage(state, action.payload);
    case types.USER_MESSAGE:
      return userMessage(state, action.payload);
    case types.USER_MESSAGE_SUCCESS:
      return userMessageSuccess(state, action.payload);
    default:
      return state;
  }
};
