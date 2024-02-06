const path = require("path");
const { getPackagesSync } = require("@lerna/project");
const fg = require("fast-glob");

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

const isProdBuild = process.env.NODE_ENV === "production";

module.exports = {
  stories: ["../../**/*.stories.{mdx,tsx}"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-knobs",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@braze/i18n-storybook-addon",
  ],
  babel: async (options) => {
    options.plugins.push([
      "babel-plugin-istanbul",
      {
        // this ensures we collect coverage from ../../packages/ instead of just from packages/storybook/
        cwd: path.resolve(__dirname, "..", ".."),
        include: ["**/src"],
        exclude: [
          "**/*.cy.ts",
          "**/index.ts",
          "**/types.ts",
          "**/*.stories.tsx",
          "**/component_tests/**/*",
          "**/i18n-dev/**/*"
        ],
      },
    ]);

    return options;
  },
  webpackFinal: (config) => {
    config.resolve.alias = {
      // treat imports within the monorepo as aliases to avoid having to build
      ...getAliases(),
    };

    return config;
  },
  refs: {
    labs: {
      title: "Labs",
      url: isProdBuild
        ? "https://labs.beacon.braze.com/"
        : "http://localhost:6009",
    },
    styling: {
      title: "Styling",
      url: isProdBuild
        ? "https://styling.beacon.braze.com/"
        : "http://localhost:6007",
    },
    dataVisualization: {
      title: "Data Visualization",
      url: isProdBuild
        ? "https://beacon-charts.k8s.tools-001.p-use-1.braze.com/"
        : "http://localhost:6010",
    },
  },
};
