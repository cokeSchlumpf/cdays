const _ = require('lodash');
const rp = require('request-promise');
const openwhisk = require('openwhisk');

exports.main = (params) => {
  const ow = openwhisk();
  
  if (params.payload.input.message.includes("agent")) {
    console.log("forward to agent")

    return {
      statusCode: 200,
      payload: params.payload
    }
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