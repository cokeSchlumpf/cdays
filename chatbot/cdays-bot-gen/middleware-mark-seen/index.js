const botpack = require('serverless-botpack-lib');

exports.main = (params) => {
  const bot = botpack(params);
  return bot.send.signal(['$action:mark_seen']);
}