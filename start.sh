kill -9 $(lsof -t -i:9000 -sTCP:LISTEN)
kill -9 $(lsof -t -i:9001 -sTCP:LISTEN)
rm -rf node_modules/.cache/hard-source
rm -rf public/dist
rm -rf dist
yarn start
