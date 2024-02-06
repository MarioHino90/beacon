import { addons } from "@storybook/addons";
import { create } from "@storybook/theming";
import logo from "./beacon-logo.png";

const theme = create({
  base: "light",
  fontBase: "'Sailec', helvetica, arial, sans-serif",

  brandImage: logo,
  brandUrl: "https://www.braze.com",

  barSelectedColor: "#008294",
  appBg: "#F8F9F9",

  colorPrimary: "#008294",
  colorSecondary: "#F08237",
});

addons.setConfig({
  panelPosition: "right",
  theme,
});
