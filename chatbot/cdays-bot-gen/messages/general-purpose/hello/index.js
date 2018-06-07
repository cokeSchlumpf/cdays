/**
 * These messages include variants of saying hello.
 */

exports.main = [
  {
    '$intent': 'hello',
    '$time_of_day': 'sunday_morning',
    value: require('./good-morning-sunday').main
  },
  {
    '$intent': 'hello',
    '$time_of_day': 'sunday_afternoon',
    value: require('./good-afternoon-sunday').main
  },
  {
    '$intent': 'hello',
    '$time_of_day': 'sunday_evening',
    value: require('./good-evening-sunday').main
  },
  {
    '$intent': 'hello',
    '$time_of_day': 'evening',
    value: require('./good-evening').main
  }, 
  {
    '$intent': 'hello',
    value: {
      text: 'Hallo {{conversationcontext.user.first_name}}!'
    }
  }
]