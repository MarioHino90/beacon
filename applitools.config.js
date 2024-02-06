/* eslint-disable @typescript-eslint/no-var-requires */
const { execSync } = require("child_process");

const getBranchName = () => {
  // attempt to grab branch name from environment
  const branchName =
    process.env.BUILDKITE_BRANCH ||
    `${execSync("git rev-parse --abbrev-ref HEAD", {
      encoding: "utf-8",
    })
      .split("\n")
      .shift()}/LOCAL`;

  // if branch name is defined in env, then use it
  return `braze-inc/beacon/${branchName}`;
};

/**
 * get a sensible batch name for easy identification of the test
 */
const getBatchName = () => {
  // attempt to grab branch name from environment
  const branchName = process.env.BUILDKITE_BRANCH;

  // if branch name is defined in env, then use it
  if (branchName) {
    return `Beacon (${branchName})`;
  }

  // otherwise, try to grab it from git
  const branchNameFromGit = execSync("git rev-parse --abbrev-ref HEAD", {
    encoding: "utf-8",
  })
    .split("\n")
    .shift();

  return `Beacon (${branchNameFromGit}) [LOCAL]`;
};

const config = {
  serverUrl: "https://brazeeyesapi.applitools.com",
  appName: "beacon",
  testConcurrency: 20,
  browser: [
    // Add browsers with different viewports
    { width: 1280, height: 720, name: "chrome" },
    // { width: 700, height: 500, name: "firefox" },
    // { width: 1600, height: 1200, name: "ie11" },
    // { width: 1024, height: 768, name: "edgechromium" },
    // { width: 800, height: 600, name: "safari" },
    // Add mobile emulation devices in Portrait mode
    // { deviceName: "iPhone X", screenOrientation: "portrait" },
    // { deviceName: "Pixel 2", screenOrientation: "portrait" },
  ],
  batchId: process.env.BUILDKITE_COMMIT || String(new Date().getTime()),
  batchName: getBatchName(),
  isDisabled: !process.env.APPLITOOLS_API_KEY || process.env.DISABLE_APPLITOOLS,
  failCypressOnDiff: false,
  dontCloseBatches: !!process.env.BUILDKITE_BRANCH,
  branchName: getBranchName(),
  parentBranchName: "braze-inc/beacon/main",
};

module.exports = config;
