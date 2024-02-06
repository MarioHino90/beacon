const presets = ["@babel/preset-react", "@babel/preset-typescript"];

module.exports = {
  presets: ["@babel/preset-modules", ...presets],
  plugins: [
    "babel-plugin-macros",
    "@babel/plugin-proposal-class-properties",
    "babel-plugin-styled-components",
  ],
  env: { test: { presets: ["@babel/preset-env", ...presets] } },
};
