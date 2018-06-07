exports.main = [
  {
    '$action': 'typing_on',
    '$action_duration': '3s',
    value: {
      text: {
        seq: [
          { wait: '3s', typing: true }
        ]
      }
    }
  },
  {
    '$action': 'typing_on',
    value: {
      text: {
        seq: [{ typing_on: true }]
      }
    }
  },
  {
    '$action': 'mark_seen',
    value: {
      text: {
        seq: [{ mark_seen: true }]
      }
    }
  }
];