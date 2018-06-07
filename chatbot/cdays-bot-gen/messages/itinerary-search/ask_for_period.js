// TODO: Antwort kann zu Ferienzeiten unterschiedlich sein: Im Frühjahr "..in den Sommerferien", im Sommer "... noch diesen Sommer oder erst im Herbst?"

exports.main = [
  {
    '$intent': 'itinerary_search:ask_for_period',
    value: {
      text: [
        'Wann möchtest du denn reisen?'
      ]
    }
  }
]