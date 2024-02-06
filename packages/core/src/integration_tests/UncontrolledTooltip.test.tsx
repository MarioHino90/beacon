/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { tooltip } from "@braze/beacon-test-utils";

const story = getStorybookURL("Core/Overlay/UncontrolledTooltip");

type urlKeys = "default";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
};

describe("UncontrolledTooltip", () => {
  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  const context = makeContext("UncontrolledTooltip", { tooltip });

  it("should render correctly", () => {
    visit();

    cy.findByText("invisible button").click();

    cy.realPress(["Shift", "Tab"]);

    context.tooltip.should("be.visible");
  });
});
