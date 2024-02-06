/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const { getPackagesSync } = require("@lerna/project");

const envToUse = "development";

/**
 * Function to find all packages in the monorepo and return all paths
 * to packages inside `packages/` and `lab/` directories
 * @returns object containing aliases as keys and full paths to packages as their corresponding values
 */
const getAliases = () => {
  const pkgs = {};

  getPackagesSync().forEach(({ name, location }) => {
    if (location.includes("packages")) {
      pkgs[name] = `${location}/src`;
    }
  });

  return pkgs;
};

module.exports = {
  mode: envToUse,
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".js", ".jsx"],
    alias: getAliases(),
  },
  module: {
    rules: [
      {
        test: /\.[t|j]sx?$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: [
                "@babel/preset-env",
                "@babel/preset-react",
                [
                  "@babel/preset-typescript",
                  { allExtensions: true, isTSX: true },
                ],
              ],
              plugins:
                process.env.COMPONENT_TESTS === "1"
                  ? [
                      "babel-plugin-macros",
                      "@babel/plugin-proposal-class-properties",
                      "babel-plugin-styled-components",
                      [
                        "babel-plugin-istanbul",
                        {
                          // cwd is `integration-tests`, so instead force it to be `packages/`
                          cwd: path.resolve(
                            __dirname,
                            "..",
                            "..",
                            "..",
                            "packages"
                          ),
                          include: ["**/*.ts", "**/*.tsx"],
                          exclude: [
                            "**/*.cy.ts",
                            "**/index.ts",
                            "**/types.ts",
                            "**/*.stories.tsx",
                            "**/component_tests/**/*",
                          ],
                        },
                      ],
                    ]
                  : [
                      "babel-plugin-macros",
                      "@babel/plugin-proposal-class-properties",
                      "babel-plugin-styled-components",
                    ],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "fonts/",
            },
          },
        ],
      },
    ],
  },
};
