/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { formGroup, formGroupLegend } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookURL("Core/Forms/FormGroup");
const context = makeContext("FormGroup", {
  formGroup,
  formGroupLegend,
});

type urlKeys = "default" | "noLegend" | "stacking";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  noLegend: story("no legend")()(),
  stacking: story("stacking")()(),
};

describe("FormGroup", () => {
  setupVisualTesting("FormGroup");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page].replace("id=", "path=/story/"));
  }

  it("should appear correctly", () => {
    visit("default");

    context.formGroup.should("be.visible");

    context.formGroupLegend.should("be.visible");

    visualTest();
  });

  it("should appear correctly when no legend present", () => {
    visit("noLegend");

    context.formGroup.should("be.visible");

    context.formGroupLegend.should("not.exist");

    visualTest();
  });

  it("should appear correctly when stacked", () => {
    visit("stacking");

    context.formGroup.should("be.visible");

    visualTest();
  });
});
