const glob = require("glob");

const isUnit = process.argv[2] === "unit";
const tests = glob.sync(
  `**packages/**/${isUnit ? "component" : "integration"}_tests/*.test.*`
);
const total = +process.env.BUILDKITE_PARALLEL_JOB_COUNT;
const run = +process.env.BUILDKITE_PARALLEL_JOB;

const makeIncludeTestInSlice = (run, total) => (_, index) => {
  if ((index + run) % total === 0) {
    return true;
  }

  return false;
};

console.log(tests.filter(makeIncludeTestInSlice(run, total)).join(","));
