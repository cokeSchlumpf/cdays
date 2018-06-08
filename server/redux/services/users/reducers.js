import { fromJS } from 'immutable';
import { types } from './actions';

export const initialState = fromJS({});

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
