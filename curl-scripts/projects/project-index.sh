#!/bin/bash

curl "http://localhost:4741/projects" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
