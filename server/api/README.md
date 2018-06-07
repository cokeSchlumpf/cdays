# Tests

```bash
# POST /messages

curl \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"user_id": "anonym_a24cfcb0-0720-4d99-9643-9fd65a34d689", "message":"HUHUU!"}' \
  http://localhost:3010/api/v1/messages

curl \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"user_id": "anonym_84350165-c2b4-49ce-abf2-1f42d85c5179", "message": { "typing_on": true }}' \
  http://localhost:3010/api/v1/messages

curl \
  -H "Content-Type: application/json" \
  -X POST \
  -d '{"user_id": "anonym_84350165-c2b4-49ce-abf2-1f42d85c5179", "message": { "typing_off": true }}' \
  http://localhost:3010/api/v1/messages
```