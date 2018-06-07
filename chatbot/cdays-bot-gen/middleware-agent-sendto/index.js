const _ = require('lodash');
const rp = require('request-promise');
const openwhisk = require('openwhisk');

exports.main = (params) => {
  const ow = openwhisk();
  
  if (params.payload.input.message.includes("agent")) {
    const options = {
      uri: `https://${params.config.cdays.api}/api/v1/messages`,
      method: 'POST',
      json: {
        user_id: params.payload.input.user,
        message: params.payload.input.message
      }
    };

    console.log(JSON.stringify(params.payload, null, 2));

    return rp(options).then(response => {
      return {
        statusCode: 200,
        payload: params.payload
      };
    }).catch(error => {
      return {
        statusCode: 400,
        error: {
          message: 'Unable to send action to Facebook.',
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
        middleware: params.config.middleware_wcs
      }
    };

    return ow.actions.invoke(invokeParams);
  }
}