import constantsFromArray from '../../../utils/constants-from-array';

export const types = constantsFromArray([
  'DOODY_ACTION',
  'DOODY_MESSAGE',
  'DOODY_SEEN',
  'USER_MESSAGE',
  'USER_MESSAGE_SUCCESS'
], 'COMPONENTS_DOODYCHAT_');

export const doodyAction = (action) => (
  { type: types.DOODY_ACTION, payload: { action } }
);

export const doodyMessage = (message) => (
  { type: types.DOODY_MESSAGE, payload: { message } }
);

export const userMessage = (message) => (
  { type: types.USER_MESSAGE, payload: { message } }
);

export const userMessageSuccess = () => (
  { type: types.USER_MESSAGE_SUCCESS, payload: { } }
);

export default {
  doodyAction,
  doodyMessage,
  userMessage,
  userMessageSuccess
}