/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { buttonGroup } from "@braze/beacon-test-utils";

const story = getStorybookURL("Core/Primitives/ButtonGroup");

type urlKeys =
  | "default"
  | "left3Buttons"
  | "right3Buttons"
  | "vertical2Buttons"
  | "vertical3Buttons"
  | "withAnnotation";

const urls: { [K in urlKeys]: string } = {
  default: story("Left aligned (2 buttons)")()(),
  left3Buttons: story("Left aligned (3 buttons)")()(),
  right3Buttons: story("Right aligned (3 buttons)")()(),
  vertical2Buttons: story("Vertical aligned (2 buttons)")()(),
  vertical3Buttons: story("Vertical aligned (3 buttons)")()(),
  withAnnotation: story("With annotation")()(),
};

function visit(page: urlKeys = "default") {
  cy.visit(urls[page]);
}

const context = makeContext("ButtonGroup", {
  buttonGroup,
});

describe("ButtonGroup", () => {
  setupVisualTesting("ButtonGroup");

  it("should appear correctly when left aligned with 2 buttons", () => {
    visit();

    context.buttonGroup.should("be.visible");

    visualTest();
  });

  it("should appear correctly when left aligned with 3 buttons", () => {
    visit("left3Buttons");

    context.buttonGroup.should("be.visible");

    visualTest();
  });

  it("should appear correctly when right aligned with 3 buttons", () => {
    visit("right3Buttons");

    context.buttonGroup.should("be.visible");

    visualTest();
  });

  it("should appear correctly when vertical aligned with 2 buttons", () => {
    visit("vertical2Buttons");

    context.buttonGroup.should("be.visible");

    visualTest();
  });

  it("should appear correctly when vertical aligned with 3 buttons", () => {
    visit("vertical3Buttons");

    context.buttonGroup.should("be.visible");

    visualTest();
  });

  it("should appear correctly when with annotation", () => {
    visit("withAnnotation");

    context.buttonGroup.should("be.visible");

    visualTest();
  });
});
