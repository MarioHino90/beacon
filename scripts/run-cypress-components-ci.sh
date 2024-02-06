#!/bin/bash

function list_specs() {
  echo $(node $PWD/scripts/split-files.js unit)
}

# copy the coverage file generated to a build-specific file
function copy_coverage() {
  if [ -f "integration-tests/coverage/coverage-final.json" ]; then
    mv integration-tests/coverage/coverage-final.json "integration-tests/coverage/cypress/coverage-cypress-components-${BUILDKITE_PARALLEL_JOB}.json"
  else
    # no tests ran, so generate some fake empty coverage so buildkite artifacts work
    mkdir -p /source/integration-tests/coverage/cypress
    echo "{}" > "integration-tests/coverage/cypress/coverage-cypress-components-${BUILDKITE_PARALLEL_JOB}.json"
  fi
}

specs_found="$(list_specs)"
if [ -z "$specs_found" ]; then
  # no tests to run
  copy_coverage
else
  yarn cypress:unit:cli --config-file cypress-ci.json --spec $(list_specs)
  if [ $? -eq 0 ]; then
    # return the result of copy_coverage since tests passed
    copy_coverage
  else
    # tests failed
    copy_coverage
    # exit with error
    exit 1
  fi
fi
