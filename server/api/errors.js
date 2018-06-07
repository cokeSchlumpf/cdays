import _ from 'lodash';
import config from 'config';
import indentString from 'indent-string';
import winston from 'winston';

const error = (status, messageKey, message) => (parameters = {}) => ({
  messageKey,
  message,
  parameters,
  send: (res) => {
    const body = {
      error: {
        messageKey,
        message,
        parameters: _.pickBy(parameters, (value, key) => {
          return config.get('environment') === 'dev' || !_.isEqual(key, 'err');
        })
      }
    }

    const parametersStr = indentString(JSON.stringify(parameters, null, 2), 2);
    winston.error(`[${messageKey}] ${message}\n${parametersStr}`);

    res.status(status);
    res.send(body);
  }
});

module.exports = {
  E000_InternalServerError: error(500, 0, 'An internal server error occured'),
  E001_MissingRequiredFields: error(400, 1, 'A required field is missing in the input'),
}