/* eslint-disable jest/expect-expect */
import { getStorybookURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookURL("Core/Text/Label");

type urlKeys = "default";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
};

describe("Label", () => {
  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  setupVisualTesting("Label");

  it("should render a label", () => {
    visit();

    visualTest();
  });
});
