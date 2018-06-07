exports.main = {
  '$intent': 'entry_points:first_contact',
  value: {
    text: {
      seq: [
        [
          'Du schreibst mir zum ersten mal :)',
          'Wir kennen uns noch nicht, oder?'
        ],
        { wait: '2s', typing: true },
        [
          'Mein Name ist Doody. Ich kann dich bei der Suche und Buchung deiner nächsten Kreuzfahrt unterstützen.',
          'Darf ich mich vorstellen? Mein Name ist Doody. Wenn du Hilfe benötigst eine Kreuzfahrt für deinen nächsten Urlaub zu finden und zu buchen, bin ich für dich da.',
          'Du sprichst mit Doody. Gemeinsam können wir die richtige Kreuzfahrt für dich finden und ich helfe dir beim buchen, wenn du magst.'
        ],
        { wait: '2s', typing: true },
        [
          'Falls ich dir mal nicht weiter helfen kann, kann ich dein Anliegen auf deinen Wunsch an ein Reisebüro weiterleiten.',
          'Sollte ich einmal nicht mehr weiter wissen, können wir ein Reisebüro aus deiner Nähe in unsere Konversation einbezihen.'
        ],
        { wait: '2s', typing: true },
        [
          'Während deiner Reise können wir auch miteinander schreiben. Ich gebe dir Tipps was du an den einzelnen Stationen deiner Reise unternehmen kannst.',
          'Auch während deiner Reise bin ich für dich da. Hast du Fragen oder suchst nach Tipps während deines Urlaubs, schreib mich einfach an.'
        ],
        { wait: '2s', typing: true },
        [
          'Wie kann ich dir heute helfen?',
          'Was möchtest du heute tun?',
          'Möchtest du, dass wir gemeinsam eine Reise für dich finden?',
          'Sollen wir mal schauen welche Reise zu dir passt?'
        ]
      ]
    }
  }
}