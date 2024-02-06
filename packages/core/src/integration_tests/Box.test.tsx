/* eslint-disable jest/expect-expect */
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { box } from "@braze/beacon-test-utils";
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";

const context = makeContext("Box", {
  box,
});

const story = getStorybookControlsURL("Core/Layout/Box");

type urlKeys =
  | "default"
  | "multipleSizes"
  | "convenienceSizes"
  | "inline"
  | "otherStyling"
  | "spacingWithoutBox"
  | "asAnotherElement";

const urls: { [K in urlKeys]: string } = {
  default: story("Basic Use")()(),
  multipleSizes: story("Multiple Sizes")()(),
  convenienceSizes: story("Convenience Sizes")()(),
  inline: story("Inline")()(),
  otherStyling: story("Other Styling")()(),
  spacingWithoutBox: story("Spacing Without Box")()(),
  asAnotherElement: story("As Another Element")()(),
};

describe("Box", () => {
  function visit(story: urlKeys) {
    cy.visit(urls[story]);
  }

  setupVisualTesting("Box");

  it("should render basic view", () => {
    visit("default");

    context.box.should("be.visible");

    visualTest();
  });

  it("should render multiple box sizes", () => {
    visit("multipleSizes");

    visualTest();
  });

  it("should render convenience box sizes", () => {
    visit("convenienceSizes");

    visualTest();
  });

  it("should render box inline", () => {
    visit("inline");

    visualTest();
  });

  it("should render box with other stylings", () => {
    visit("otherStyling");

    visualTest();
  });

  it("should render using getBoxCss without the box component", () => {
    visit("spacingWithoutBox");

    visualTest();
  });

  it('should render using the "as" property to another html element', () => {
    visit("asAnotherElement");

    cy.get("section").should("have.length", 1).and("have.class", "bcl-box");

    visualTest();
  });
});
