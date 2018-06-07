exports.main = {
  "text": {
    "seq": [
      [
        "Hallo {{conversationcontext.user.first_name}}",
        "Hoi {{conversationcontext.user.first_name}}"
      ],
      { wait: "3s", typing: true },
      [
        "Hast du einen gemütlichen Sonntag Nachmittag?",
        "Was gibt es besseres als einen gemütlichen Sonntag Nachmittag?",
        "Ein ruhiger Nachmittag um die nächsten Reiseziele zu finden - Was gibt es denn besseres?"
      ]
    ]
  }
}