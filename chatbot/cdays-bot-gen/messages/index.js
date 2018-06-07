const _ = require('lodash');

const messages = _.concat(
  require('./general-purpose').main,
  require('./entry-points').main,
  require('./itinerary-search').main,
  require('./util').main
);

// require('fs').writeFileSync('./messages.json', JSON.stringify(messages, null, 2), 'utf-8');

exports.main = (params) => ({
  statusCode: 200,
  result: messages
});