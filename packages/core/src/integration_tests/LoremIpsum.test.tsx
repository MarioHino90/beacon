/* eslint-disable jest/expect-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { box } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookURL("Core/Text/LoremIpsum");

const context = makeContext("LoremIpsum", { box });

type urlKeys = "default" | "secondary";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  secondary: story("secondary use")()(),
};

function visit(page: urlKeys) {
  cy.visit(urls[page]);
}

describe("LoremIpsum", () => {
  setupVisualTesting("LoremIpsum");

  it("should render basic view", () => {
    visit("default");

    visualTest();
  });

  it("should render more than 1 paragraph", () => {
    visit("secondary");

    context.box.should("have.length", 2);

    visualTest();
  });
});
