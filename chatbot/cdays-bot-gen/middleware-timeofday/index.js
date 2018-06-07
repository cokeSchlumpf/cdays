const _ = require('lodash');

exports.main = (params) => {
  const getSecondsOfDay = (hours, minutes) => {
    return (60 * minutes) + (60 * 60 * hours);
  };

  const getSecondsFromDate = (date) => {
    const hours = date.getHours(); // 0 to 23
    const minutes = date.getMinutes(); // 0 to 59
    return getSecondsOfDay(hours, minutes);
  };

  const s = (time) => {
    const numbers = time.split(':');
    return getSecondsOfDay(numbers[0] * 1, numbers[1] * 1);
  }

  const calcTime = (offset) => {
    const d = new Date();
    const utc = d.getTime() - (d.getTimezoneOffset() * 60000);
    const nd = new Date(utc + (3600000*offset));
    return nd;
}

  const getTimeOfDay = (nowDate) => {
    const nowDay = nowDate.getDay();
    const now = getSecondsFromDate(nowDate);

    if (nowDay === 0 && now < s('12:00')) {
      return 'sunday_morning';
    } else if (nowDay === 0 && now < s('18:00')) {
      return 'sunday_afternoon';
    } else if (nowDay === 0) {
      return 'sunday_evening';
    } else if (nowDay === 1 && now < s('10:00')) {
      return 'monday_morning';
    } else if (nowDay === 1 && now < s('18:00')) {
      return 'monday_day';
    } else if (nowDay === 1) {
      return 'monday_evening';
    } else if (nowDay === 5 && now < s('10:00')) {
      return 'friday_morning';
    } else if (nowDay === 5 && now < s('18:00')) {
      return 'friday_day';
    } else if (nowDay === 5) {
      return 'friday_evening';
    } else if (nowDay === 6 && now < s('11:00')) {
      return 'saturday_morning';
    } else if (nowDay === 6 && now < s('16:00')) {
      return 'saturday_day';
    } else if (nowDay === 6 && now < s('20:00')) {
      return 'saturday_afternoon';
    } else if (nowDay === 6) {
      return 'saturday_evening';
    } else if (now > s('02:00') && now < s('04:30')) {
      return 'nighthours';
    } else if (now > s('02:00') && now < s('06:30')) {
      return 'early_bird';
    } else if (now > s('02:00') && now < s('10:30')) {
      return 'morning';
    } else if (now > s('02:00') && now < s('11:45')) {
      return 'day';
    } else if (now > s('02:00') && now < s('13:30')) {
      return 'launchtime';
    } else if (now > s('02:00') && now < s('18:00')) {
      return 'afternoon';
    } else if (now <= s('02:00') || now >= s('18:00')) {
      return 'evening';
    }
  }

  const timezoneOffset = _.get(params, 'payload.conversationcontext.user.timezone', 0);
  const nowDate = calcTime(timezoneOffset);

  _.set(params, 'payload.context.signals', _.concat(_.get(params, 'payload.context.signals', []), `\$time_of_day:${getTimeOfDay(nowDate)}`));
  _.set(params, 'payload.context.now', nowDate);

  return Promise.resolve({
    statusCode: 200,
    payload: params.payload
  });
}