/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { iconCircle } from "@braze/beacon-test-utils";

const context = makeContext("iconCircle", { iconCircle });
const story = getStorybookControlsURL("Commons/Icons/IconCircle");

type urlKeys = "default" | "danger" | "success" | "warning" | "noIntent";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  noIntent: story("basic use")([
    {
      type: "select",
      name: "intent",
      value: "default",
    },
  ])(),
  danger: story("danger use")()(),
  success: story("success use")()(),
  warning: story("warning use")()(),
};

describe("IconCircle", () => {
  setupVisualTesting("IconCircle");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it("should render correctly with no explicit intent", () => {
    // visit page
    visit();

    // verify that icon circle is showing as expected
    context.iconCircle.should("be.visible");

    // take snapshot
    visualTest();
  });

  it("should render correctly with 'danger' intent", () => {
    // visit page
    visit("danger");

    // verify that icon circle is showing as expected
    context.iconCircle.should("be.visible");

    // take snapshot
    visualTest();
  });

  it("should render correctly with 'success' intent", () => {
    // visit page
    visit("success");

    // verify that icon circle is showing as expected
    context.iconCircle.should("be.visible");

    // take snapshot
    visualTest();
  });

  it("should render correctly with 'warning' intent", () => {
    // visit page
    visit("warning");

    // verify that icon circle is showing as expected
    context.iconCircle.should("be.visible");

    // take snapshot
    visualTest();
  });

  it("should render correctly with no specified intent as info", () => {
    // visit page
    visit("noIntent");

    // verify that icon circle is showing as expected
    context.iconCircle.should("be.visible");

    // take snapshot
    visualTest();
  });
});
