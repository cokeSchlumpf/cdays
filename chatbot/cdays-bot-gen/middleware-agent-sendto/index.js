const _ = require('lodash');
const rp = require('request-promise');
const openwhisk = require('openwhisk');

exports.main = (params) => {
  const ow = openwhisk();
  
  if (_.get(params, 'payload.conversationcontext.agent', false)) {
    const options = {
      uri: `https://${params.config.cdays.api}/api/v1/messages/message`,
      method: 'POST',
      json: {
        message: _.get(params, 'payload.input.message', ''),
        sender: 'Andre Schmid'
      }
    };

    return rp(options).then(response => {
      return {
        statusCode: 200,
        payload: params.payload
      };
    }).catch(error => {
      return {
        statusCode: 400,
        error: {
          message: 'Unable to send message to backend.',
          parameters: {
            error,
            options
          }
        }
      };
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