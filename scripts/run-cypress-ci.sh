#!/bin/bash

# from https://github.com/buildkite-plugins/docker-compose-buildkite-plugin/blob/master/lib/shared.bash#L81
# Returns the name of the docker compose project for this build
function docker_compose_project_name() {
  # No dashes or underscores because docker-compose will remove them anyways
  echo "buildkite${BUILDKITE_JOB_ID//-}"
}

function list_specs() {
  echo $(node $PWD/scripts/split-files.js)
}

# copy the coverage file generated to a build-specific file
function copy_coverage() {
  if [ -f "integration-tests/coverage/coverage-final.json" ]; then
    mv integration-tests/coverage/coverage-final.json "integration-tests/coverage/cypress/coverage-cypress-${BUILDKITE_PARALLEL_JOB}.json"
  else
    # no tests ran, so generate some fake empty coverage so buildkite artifacts work
    mkdir -p /source/integration-tests/coverage/cypress
    echo "{}" > "integration-tests/coverage/cypress/coverage-cypress-${BUILDKITE_PARALLEL_JOB}.json"
  fi
}

CYPRESS_BASE_URL="http://$(docker_compose_project_name)_storybook_1" yarn cypress:cli --config-file cypress-ci.json --spec $(list_specs)
if [ $? -eq 0 ]; then
  # return the result of copy_coverage
  copy_coverage
else
  # tests failed
  copy_coverage
  # exit with error
  exit 1
fi
