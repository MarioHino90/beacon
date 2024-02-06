/**
 * @fileoverview jest.config for individual packages
 * NOTE: this config is NOT meant to be run at the root
 * of the monorepo and doing so will cause failures;
 * rather, it is meant to be imported and used in each
 * package
 */

module.exports = {
  collectCoverageFrom: [
    "<rootDir>/src/**/*.{ts,tsx}", // get coverage from all TS and TSX files in /packages, even if it's not tested
    "!**/index*", // ignore index files
    "!**/__snapshots__/**", // ignore snapshots
    "!**/*stories*", // ignore stories
    "!**/templates/**", // ignore templates
    "!**/integration_tests/**", // ignore integration tests
    "!**/component_tests/**", // ignore cypess component tests
    "!**/test_utils/**", // ignore cypress test utils
  ],
  coverageDirectory: "<rootDir>/coverage/",
  coverageReporters: ["html", "text-summary", "json"],
  coveragePathIgnorePatterns: [
    "node_modules/",
    "styles/",
    "dist/",
    "docs/",
    "scripts/",
    "integration_tests/",
  ],
  testRegex: ["(\\.(test))\\.(ts|tsx|js|jsx)$"],
  testPathIgnorePatterns: [
    "node_modules/",
    "dist/",
    "docs/",
    "templates/",
    "integration_tests/",
    "component_tests/",
    "test_utils/",
  ],
  transform: {
    "^.+\\.[t|j]sx?$": "<rootDir>/../../jest.transform.js",
    "^.+\\.mdx$": "@storybook/addon-docs/jest-transform-mdx",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  setupFilesAfterEnv: ["<rootDir>/../../jest.setup.js"],
  snapshotSerializers: ["enzyme-to-json/serializer"],
  verbose: true,
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.test.json",
    },
  },
  moduleNameMapper: {
    "\\.(css|scss|less|eot|woff|woff2|ttf)$": "identity-obj-proxy",
  },
};
