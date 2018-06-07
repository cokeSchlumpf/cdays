exports.main = {
  "text": {
    "seq": [
      [
        "Einen wunderschönen Guten Abend {{conversationcontext.user.first_name}}",
        "Guten Abend {{conversationcontext.user.first_name}}",
        "Hallo {{conversationcontext.user.first_name}}",
        "Hoi {{conversationcontext.user.first_name}}"
      ],
      { wait: "3s", typing: true },
      [
        "Hast du Lust deine nächste Reise zu planen? Mit dem nächsten Urlaub vor Augen wird der Start in die Woche morgen früh viel einfacher."
      ]
    ]
  }
}