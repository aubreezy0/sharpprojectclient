#!/bin/bash

curl "http://localhost:4741/projects/" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}" \
  --data '{
    "project": {
      "project_title": "'"${TITLE}"'",
      "difficulty": "'"${DIFFICULTY}"'"
    }
  }'

echo
