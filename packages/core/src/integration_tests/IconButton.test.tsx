/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { iconButton, tooltip } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookURL("Core/Primitives/IconButton");
const context = makeContext("IconButton", {
  iconButton,
  tooltip,
  clicks: {
    self: () => cy.get("ul#clicks"),
    children: {
      allClicks: () => cy.get("li"),
    },
  },
});

type urlKeys =
  | "default"
  | "disabled"
  | "muted"
  | "withDistance"
  | "withAriaLabel"
  | "noAriaLabel"
  | "noAriaLabelWithCompAsChild"
  | "withAutoTooltipPlacement"
  | "withTopTooltipPlacement"
  | "withRightTooltipPlacement"
  | "withBottomTooltipPlacement"
  | "withLeftTooltipPlacement";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  disabled: story("disabled use")()(),
  muted: story("muted use")()(),
  withDistance: story("with distance")()(),
  withAriaLabel: story("using aria label")()(),
  noAriaLabel: story("no aria label")()(),
  noAriaLabelWithCompAsChild: story("no aria label with comp as child")()(),
  withAutoTooltipPlacement: story("basic use")([
    {
      type: "text",
      name: "Tooltip placement",
      value: "",
    },
  ])(),
  withTopTooltipPlacement: story("basic use")([
    {
      type: "text",
      name: "Tooltip placement",
      value: "top",
    },
  ])(),
  withRightTooltipPlacement: story("basic use")([
    {
      type: "text",
      name: "Tooltip placement",
      value: "right",
    },
  ])(),
  withBottomTooltipPlacement: story("basic use")([
    {
      type: "text",
      name: "Tooltip placement",
      value: "bottom",
    },
  ])(),
  withLeftTooltipPlacement: story("basic use")([
    {
      type: "text",
      name: "Tooltip placement",
      value: "left",
    },
  ])(),
};

describe("IconButton", () => {
  setupVisualTesting("IconButton");

  function visit(
    page: urlKeys = "default",
    options: Partial<Cypress.VisitOptions> = {}
  ) {
    cy.visit(urls[page], options);
  }

  it("should render an icon in the button", () => {
    visit();

    context.iconButton.should("be.visible");

    visualTest();
  });

  it("should render a tooltip on hover", () => {
    visit();

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter");

    context.tooltip.should("be.visible");

    visualTest();
  });

  it("should render a tooltip on auto placement", () => {
    visit("withAutoTooltipPlacement");

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter");

    context.tooltip.should("be.visible");

    visualTest();
  });

  it("should render a tooltip on top placement", () => {
    visit("withTopTooltipPlacement");

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter");

    context.tooltip.should("be.visible");

    visualTest();
  });

  it("should render a tooltip on right placement", () => {
    visit("withRightTooltipPlacement");

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter");

    context.tooltip.should("be.visible");

    visualTest();
  });

  it("should render a tooltip on bottom placement", () => {
    visit("withBottomTooltipPlacement");

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter");

    context.tooltip.should("be.visible");

    visualTest();
  });

  it("should render a tooltip on left placement", () => {
    visit("withLeftTooltipPlacement");

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter");

    context.tooltip.should("be.visible");

    visualTest();
  });

  it("should respond to clicks properly", () => {
    visit();

    context.iconButton.should("be.visible");

    // verify that the triangle tip of the tooltip is not obscuring the icon button click events
    context.iconButton.click("bottom");

    context.iconButton.click("top");

    context.iconButton.click("left");

    context.iconButton.click("right");

    // clear the tooltip
    context.clicks.click();

    context.clicks.in((clicks) => {
      clicks.allClicks.should("have.length", 4);
    });
  });

  it("should render a tooltip on hover when muted", () => {
    visit("muted");

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter");

    context.tooltip.should("be.visible");

    visualTest();
  });

  it("should NOT render a tooltip on hover when disabled", () => {
    visit("disabled");

    context.iconButton.should("be.visible");

    context.tooltip.should("not.exist");

    context.iconButton.trigger("mouseenter", { force: true });

    context.tooltip.should("not.exist");

    visualTest();
  });

  // TODO: this test is flaky due to console.warn, review
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("should use passed aria-label and NOT produce a 'console.warn' message when aria-label is defined", () => {
    visit("withAriaLabel", {
      // spy on console.warn to ensure it's not called
      onBeforeLoad(win) {
        cy.spy(win.console, "warn").as("console.warn");
      },
    });

    // check that the aria-label matches spec
    context.iconButton.then(($iconButton) => {
      expect($iconButton.attr("aria-label")).equals("a helpful aria-label");
    });

    // assert that console.warn wasn't called with the warning message of interest
    cy.get("@console.warn").should(
      "not.be.calledWith",
      "WARNING: You have not provided an aria-label for this `IconButton`. In the next version of Beacon, an aria-label will be required for `IconButton`s."
    );
  });

  // TODO: this test is flaky due to console.warn, review
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("should use passed in text children as aria-label and produce a 'console.warn' message starting with 'WARNING' when aria-label is omitted", () => {
    cy.visit(urls.noAriaLabel, {
      // spy on console.warn to ensure it's not called
      onBeforeLoad(win) {
        cy.stub(win.console, "warn").as("console.warn");
      },
    });

    // check that the aria-label matches spec
    context.iconButton.focus().then(($iconButton) => {
      context.tooltip.should("have.text", $iconButton.attr("aria-label"));
    });

    context.iconButton.then(() => {
      // assert that console.warn was called with the warning message of interest
      cy.get("@console.warn", { timeout: 30000 }).should(
        "be.calledWith",
        "WARNING: You have not provided an aria-label for this `IconButton`. In the next version of Beacon, an aria-label will be required for `IconButton`s."
      );
    });
  });

  // TODO: this test is flaky due to console.warn, review
  // eslint-disable-next-line jest/no-disabled-tests
  it.skip("should NOT use passed in children as aria-label and produce a 'console.warn' message starting with 'WARNING' when aria-label is omitted when aria-label is omitted and children includes components", () => {
    cy.visit(urls.noAriaLabelWithCompAsChild, {
      // spy on console.warn to ensure it's not called
      onBeforeLoad(win) {
        cy.stub(win.console, "warn").as("console.warn");
      },
    });

    // check that the aria-label matches spec
    context.iconButton.focus().then(($iconButton) => {
      cy.wrap($iconButton).should("not.have.attr", "aria-label");
    });

    // check that inner-div exists within the tooltip
    context.tooltip.within(() => {
      cy.get(".inner-div").should("have.length", 1);
    });

    context.iconButton.then(() => {
      // assert that console.warn was called with the warning message of interest
      cy.get("@console.warn", { timeout: 30000 }).should(
        "be.calledWith",
        "WARNING: You have not provided an aria-label for this `IconButton`. In the next version of Beacon, an aria-label will be required for `IconButton`s."
      );
    });
  });
});
