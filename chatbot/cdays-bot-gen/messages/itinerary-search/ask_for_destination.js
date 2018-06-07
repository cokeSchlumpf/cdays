// TODO. Antwort Wetter und Jahreszeitabhängig gestalten

exports.main = [
  {
    '$intent': 'itinerary_search:ask_for_destination',
    value: {
      text: [
        'Weißt du denn wo es hingehen soll?',
        'Hast du schon eine Idee in welcher Region du eine Kreuzfahrt machen möchtest?',
        'Hast du Präferenzen wo deine Reise sein soll?'
      ]
    }
  }
]