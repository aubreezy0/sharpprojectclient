#!/bin/bash

curl "http://localhost:4741/projects/${ID}" \
  --include \
  --request PATCH \
  --header "Authorization: Token token=${TOKEN}" \
  --header "Content-Type: application/json" \
  --data '{
    "project": {
      "project_title": "'"${TITLE}"'",
      "difficulty": "'"${DIFFICULTY}"'"
    }
  }'

echo
