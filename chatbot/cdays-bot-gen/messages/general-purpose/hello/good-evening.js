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
        "Hast du einen gemütlich Abend?",
        "Was gibt es besseres als am Abend an die nächste Reise zu denken?",
        "Ein ruhiger Abend, und dabei über die nächste Reise nachdenken, was gibt es besseres?",
        "Möchtest du den Abend mit mir verbringen?"
      ]
    ]
  }
}