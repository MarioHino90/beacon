/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { annotation } from "@braze/beacon-test-utils";

const context = makeContext("annotation", annotation);
const story = getStorybookControlsURL("Core/Overlay/Annotation");

type urlKeys = "default" | "warning" | "info" | "error" | "disabled";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  info: story("basic use")([
    {
      type: "select",
      name: "variant",
      value: "info",
    },
  ])(),
  warning: story("basic use")([
    {
      type: "select",
      name: "variant",
      value: "warning",
    },
  ])(),
  error: story("basic use")([
    {
      type: "select",
      name: "variant",
      value: "error",
    },
  ])(),
  disabled: story("disabled use")()(),
};

describe("Annotation", () => {
  function visit(page: urlKeys = "default") {
    cy.visit(urls[page].replace("id=", "path=/story/"));
  }

  setupVisualTesting("Annotation");

  it("should work with default icon", () => {
    visit();

    context.icon.should("be.visible");

    context.icon.in((icon) => {
      icon.fontAwesomeSvg.should("have.attr", "data-icon", "info-circle");
    });
  });

  it("should work with info icon", () => {
    visit("info");

    context.icon.should("be.visible");

    context.icon.in((icon) => {
      icon.fontAwesomeSvg.should("have.attr", "data-icon", "info-circle");
    });

    visualTest();
  });

  it("should work with warning icon", () => {
    visit("warning");

    context.icon.should("be.visible");

    context.icon.in((icon) => {
      icon.fontAwesomeSvg.should(
        "have.attr",
        "data-icon",
        "exclamation-circle"
      );
    });

    visualTest();
  });

  it("should work with error icon", () => {
    visit("error");

    context.icon.should("be.visible");

    context.icon.in((icon) => {
      icon.fontAwesomeSvg.should(
        "have.attr",
        "data-icon",
        "exclamation-circle"
      );
    });

    visualTest();
  });

  it("should trigger the tooltip via icon", () => {
    visit();

    cy.findByText("...with a tooltip").should("not.exist");

    context.icon.trigger("mouseenter");

    cy.findByText("...with a tooltip").should("be.visible");

    visualTest();
  });

  it("should trigger the tooltip via button", () => {
    visit();

    cy.findByText("...with a tooltip").should("not.exist");

    cy.findByText("This button is annotated").trigger("mouseenter");

    cy.findByText("...with a tooltip").should("be.visible");

    visualTest();
  });

  it("should NOT render the styled annotation or the tooltip when disabled", () => {
    visit("disabled");

    cy.findByText("This button is NOT annotated by default").should(
      "be.visible"
    );

    context.icon.should("not.exist");

    context.tooltip.should("not.exist");

    cy.findByText("This button is NOT annotated by default").trigger(
      "mouseenter"
    );

    context.icon.should("not.exist");

    context.tooltip.should("not.exist");

    visualTest();
  });
});
