import constantsFromArray from '../../../utils/constants-from-array';

export const types = constantsFromArray([
  'SELECT',

  'ADD_TIMELINEENTRY'
], 'USERS_');

export const addTimelineentry = (user, item) => (
  { type: types.ADD_TIMELINEENTRY, payload: { user, item }, broadcast: true }
);

export default {
  addTimelineentry
};