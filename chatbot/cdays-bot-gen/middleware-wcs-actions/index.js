const _ = require('lodash');
const rp = require('request-promise');

const addresscheck = (params) => {
  const intents = JSON.stringify(_.get(params, 'payload.context.services.wcs.intents', []));
  const adresse = intents.includes("\"Adresse\"");

  console.log(intents);

  if (adresse) {
    console.log("Action Address Change")
    _.set(params, 'payload.conversationcontext.services.wcs.adresse', '');

    const options = {
      uri: `https://${params.config.cdays.api}/api/v1/messages/add-item-andre`,
      method: 'POST',
      json: {
        type: 'chat',
        subject: 'Adresse geändert',
        date: '2012-06-08',
        agent: 'Virtual Agent',
        action: 'check-coverage',
        labels: ['Adressänderung']
      }
    };

    return rp(options).then(response => {
      return params;
    })
  } else {
    return Promise.resolve(params);
  }
}

const switchagent = (params) => {
  if (_.trim(_.get(params, 'payload.input.message', '')).toLocaleLowerCase() === 'ok') {
    _.set(params, 'payload.conversationcontext.agent', true);
  }

  return Promise.resolve(params);
}

const sendusermessagebackend = (params) => {
  const options = {
    uri: `https://${params.config.cdays.api}/api/v1/messages/message`,
    method: 'POST',
    json: {
      message: _.get(params, 'payload.input.message', ''),
      sender: 'Andre Schmid'
    }
  };

  return rp(options).then(response => {
    return params;
  });
}

const sendagentmessagebackend = (params) => {
  const options = {
    uri: `https://${params.config.cdays.api}/api/v1/messages/message`,
    method: 'POST',
    json: {
      message: _.join(_.get(params, 'payload.context.services.wcs.output.text', []), '\n\n'),
      sender: 'LEAP Virtual Agent'
    }
  };

  return rp(options).then(response => {
    return params;
  });
}

exports.main = (params) => {
  return Promise.resolve(params)
    .then(addresscheck)
    .then(switchagent)
    .then(sendusermessagebackend)
    .then(sendagentmessagebackend)
    .then(params => ({
      statusCode: 200,
      payload: params.payload
    }));
}