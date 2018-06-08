import 'rxjs';

import actions, { types } from './actions';

export default [
  (action$, store$) => action$
    .ofType(types.USER_MESSAGE_SUBMIT)
    .flatMap(action => {      
      return [
        actions.userMessageSubmitSuccess(action.payload.message)
      ];
    }),
  (action$, store$) => action$
    .ofType(types.USER_MESSAGE_SUBMIT)
    .flatMap(action => {
      if (action.payload.message.includes('close')) {
        return [
          actions.windowHide()
        ];
      } else {
        return [];
      }
    })
]