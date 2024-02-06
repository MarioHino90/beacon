/* eslint-disable jest/expect-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { icon, tooltip } from "@braze/beacon-test-utils";

const context = makeContext("infoIcon", { icon, tooltip });
const story = getStorybookURL("Commons/Icons/InfoIcon");

type urlKeys = "default" | "muted" | "withAltText" | "withTooltip";

const urls: { [K in urlKeys]: string } = {
  default: story("Regular Use")()(),
  muted: story("Muted Use")()(),
  withAltText: story("Alt Text Use")()(),
  withTooltip: story("Use with Tooltip")()(),
};

describe("InfoIcon", () => {
  setupVisualTesting("InfoIcon");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it("should render correctly", () => {
    visit();

    visualTest();
  });

  it("should render correctly when muted", () => {
    visit("muted");

    visualTest();
  });

  it("should render correctly when it has alt text", () => {
    visit("withAltText");

    context.icon.should("have.attr", "aria-label");
  });

  it("should render correctly when it has tooltip", () => {
    visit("withTooltip");

    // click on the icon to get it to show a tooltip
    context.icon.click();

    // check that the tooltip is now visible
    context.tooltip.should("be.visible");
  });
});
