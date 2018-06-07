import 'rxjs';

import actions, { types } from '../actions';

import _ from 'lodash';

export default [
  // app.INIT -> services.login.INIT
  action$ => action$
    .ofType(types.app.INIT)
    .flatMap(action => [
      actions.services.user.init()
    ]),

  // chat.RECEIVE -> components.doodyChat.DOODY_MESSAGE
  action$ => action$
    .ofType(types.chat.RECEIVE)
    .filter(action => _.isString(action.payload.message))
    .flatMap(action => [
      actions.components.doodyChat.doodyMessage(action.payload.message)
    ]),

  // chat.RECEIVE -> components.doodyChat.DOODY_MESSAGE
  action$ => action$
    .ofType(types.chat.RECEIVE)
    .filter(action => _.isObject(action.payload.action))
    .flatMap(action => [
      actions.components.doodyChat.doodyAction(action.payload.action)
    ]),

  // chat.SEND_SUCCESS -> components.doodyChat.USER_MESSAGE_SUCCESS
  action$ => action$
    .ofType(types.chat.SEND_SUCCESS)
    .flatMap(action => [
      actions.components.doodyChat.userMessageSuccess()
    ]),

  // components.doodyChat.USER_MESSAGE -> chat.SEND
  action$ => action$
    .ofType(types.components.doodyChat.USER_MESSAGE)
    .flatMap(action => [
      actions.chat.send(action.payload.message)
    ]),

  // services.user.INIT_SUCCESS -> chat.INIT
  action$ => action$
    .ofType(types.services.user.INIT_SUCCESS)
    .flatMap(action => [
      actions.chat.init(action.payload.id)
    ])
]