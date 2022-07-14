#!/bin/sh

echo -e "\033[33m" --- npm publish ---"\033[m"
source .env

yarn lerna publish --registry $BASE_REGISTRY_URIscripts/clean-modules.sh