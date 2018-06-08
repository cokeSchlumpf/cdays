const _ = require('lodash');
const botpack = require('serverless-botpack-lib');
const openwhisk = require('openwhisk');

exports.main = (params) => {
  const ow = openwhisk();
  const message = _.get(params, 'payload.input.message', '');

  if (_.trim(message) === 'reset') {
    _.set(params, 'payload.conversationcontext', {
      type: 'conversationcontext',
      user: _.get(params, 'payload.conversationcontext.user')
    });

    return Promise.resolve({
      statusCode: 200,
      payload: params.payload
    });
  } else {
    const invokeParams = {
      name: `${params.config.openwhisk.package}/core-middleware`,
      blocking: true,
      result: true,
      params: {
        payload: params.payload,
        middleware: params.middleware
      }
    };

    return ow.actions.invoke(invokeParams);
  }
}