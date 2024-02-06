/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { tooltip } from "@braze/beacon-test-utils";

import { placementTypes } from "../components/Popper";

const story = getStorybookURL("Core/Overlay/Tooltip");
const context = makeContext("Tooltip", {
  tooltip,
  focusEl: () => cy.get(".tooltip-focus"),
  placementSelect: () => cy.get(".placement-select"),
});

const stories = {
  default: story("basic use")()(),
  scroll: story("closing on scroll")()(),
};

describe("Tooltip", () => {
  setupVisualTesting("Tooltip");

  function visit(page: keyof typeof stories = "default") {
    cy.visit(stories[page].replace("id=", "path=/story/"));
  }

  it("should function correctly with different placements", () => {
    visit("default");

    // loop through all of the placements and visually snapshot all of them
    placementTypes.forEach((placement) => {
      // select a valid placement for the tooltip
      context.placementSelect.select(placement);

      context.placementSelect.focus();

      // focus on the focus element
      cy.realPress("Tab");

      // assert that Tooltip is visible
      context.tooltip.should("be.visible");

      // take visual snapshot
      visualTest(placement);
    });
  });

  it("should close the tooltip on scroll of document or any parent element", () => {
    visit("scroll");

    cy.contains("button", "Hover to open").trigger("mouseenter");

    context.tooltip.should("be.visible");

    cy.scrollTo("bottom");

    context.tooltip.should("not.exist");

    cy.contains("button", "Hover to open 2").trigger("mouseenter");

    context.tooltip.should("be.visible");

    cy.get("#internal-scroll").scrollTo("bottom");

    context.tooltip.should("not.exist");
  });
});
