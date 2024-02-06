#!/bin/sh

PACKAGE=$1

rm -rf coverage
mkdir -p coverage

cp "packages/$PACKAGE/coverage/coverage-final.json" "coverage/$PACKAGE-coverage.json"
cp integration-tests/coverage/coverage-final.json coverage/cypress-coverage.json

ls coverage

yarn nyc merge --reporter=json --reporter=html coverage coverage/out.json
yarn nyc report --reporter=html -t coverage

open "file:///$PWD/coverage/index.html"