exports.main = {
  "text": {
    "seq": [
      [
        "Einen wunderschönen Guten Morgen {{conversationcontext.user.first_name}}",
        "Guten Morgen {{conversationcontext.user.first_name}}",
        "Hallo {{conversationcontext.user.first_name}}",
        "Hoi {{conversationcontext.user.first_name}}"
      ],
      { wait: "2s", typing: true },
      [
        "Bist du gut in den Sonntag gestartet?",
        "Konntest du heute ausschlafen?",
        "Ich hoffe du hattest bisher ein schönes Wochenende."
      ]
    ]
  }
}