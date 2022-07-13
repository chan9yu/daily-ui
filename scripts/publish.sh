echo -e "\033[33m"npm publish start ⏳"\033[m"
source .env
yarn lerna publish --registry $BASE_REGISTRY_URI
echo -e "\033[33m"npm publish env ⏳"\033[m"