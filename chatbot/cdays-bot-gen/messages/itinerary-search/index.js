const _ = require('lodash');

const intents = [
  'ask_for_destination',
  'ask_for_cabin',
  'ask_for_duration',
  'ask_for_period',
  'cabin_any',
  'cabin_dontknow',
  'cabin_propose',
  'destination_any',
  'destination_dontknow',
  'destination_propose',
  'duration_any',
  'duration_dontknow',
  'duration_propose',
  'period_any',
  'period_dontknow',
  'period_propose',
  'search_start'
];

exports.main = _.map(intents, intent => ({
  '$intent': `itinerary_search:${intent}`,
  value: require(`./${intent}`).main
}));