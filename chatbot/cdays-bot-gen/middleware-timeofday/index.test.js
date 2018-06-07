const _ = require('lodash');
const chai = require('chai');
const requireMock = require('mock-require');
const sinon = require('sinon');

describe('middleware-timeofday', () => {
  it('enriches the payload\'s context with the current time of day', () => {
    const payload = {
      context: {},
      conversationcontext: {},
      input: {}
    };

    require('./index').main({ payload }).then(result => {
      chai.expect(_.get(result, 'payload.context.time_of_day')).to.exist;
      chai.expect(_.get(result, 'payload.context.time_of_day')).to.contain('$time_of_day:');
    });
  });
});