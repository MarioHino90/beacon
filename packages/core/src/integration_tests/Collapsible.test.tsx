/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { collapsible } from "@braze/beacon-test-utils";

const story = getStorybookURL("Core/Content Display/Collapsible");

type urlKeys =
  | "default"
  | "centerAligned"
  | "rightAligned"
  | "withMultiLists"
  | "withInlineHeader"
  | "withIconButton"
  | "withSmIconButton"
  | "withPrimaryButton"
  | "withSecondaryButton"
  | "withTertiaryButton";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  centerAligned: story("basic use")([
    { type: "select", name: "Alignment", value: "center" },
  ])(),
  rightAligned: story("basic use")([
    { type: "select", name: "Alignment", value: "right" },
  ])(),
  withMultiLists: story("with multiple lists")()(),
  withInlineHeader: story("with inline header")()(),
  withIconButton: story("with icon button")()(),
  withSmIconButton: story("with small icon button")()(),
  withPrimaryButton: story("with primary button")()(),
  withSecondaryButton: story("with secondary button")()(),
  withTertiaryButton: story("with tertiary button")()(),
};

function visit(page: urlKeys = "default") {
  cy.visit(urls[page]);
}

const context = makeContext("Braze buttons", {
  collapsible,
});

describe("Collapsible", () => {
  setupVisualTesting("Collapsible");

  it("should correctly render a 'Collapsible' component", () => {
    visit();

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // click on the button
    context.collapsible.actions.clickButton();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component center aligned", () => {
    visit("centerAligned");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.button.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component right aligned", () => {
    visit("rightAligned");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.button.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component with multiple lists", () => {
    visit("withMultiLists");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.button.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component with inline header", () => {
    visit("withInlineHeader");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.button.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component with icon button", () => {
    visit("withIconButton");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // click on the button
    context.collapsible.actions.clickIconButton();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component with small icon button", () => {
    visit("withSmIconButton");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.iconButton.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component with primary button variant", () => {
    visit("withPrimaryButton");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.button.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component with secondary button variant", () => {
    visit("withSecondaryButton");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.button.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });

  it("should correctly render a 'Collapsible' component with tertiary button variant", () => {
    visit("withTertiaryButton");

    // assert that the collapsible body is not visible
    context.collapsible.in((collapsible) => {
      collapsible.body.should("not.be.visible");
    });

    // grab a visual snapshot
    visualTest();

    // go into the collapsible again
    context.collapsible.in((collapsible) => {
      // click on the button
      collapsible.button.click();

      // verify that the body is now visible
      collapsible.body.should("be.visible");

      // take a visual snapshot
      visualTest("collapsed content visible");
    });
  });
});
