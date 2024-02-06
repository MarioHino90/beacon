// eslint-disable-next-line @typescript-eslint/no-var-requires
const eslintConfig = require("../../.eslintrc");

module.exports = {
  ...eslintConfig,
  rules: {
    ...eslintConfig.rules,
    "@typescript-eslint/no-explicit-any": "off",
    "no-console": "off",
  },
};
