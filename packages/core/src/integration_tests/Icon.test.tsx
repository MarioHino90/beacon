/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { button, icon, specificIcon } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const story = getStorybookURL("Core/Primitives/Icon");
const context = makeContext("Icon", {
  button,
  icon,
  specificIcon,
});

const urls = {
  default: story("Basic Use")()(),
  withColor: story("With Color")()(),
  buttonWithIcon: story("Button With Icons")()(),
  brazeIcons: story("Braze Icon List")()(),
  iconPacks: story("Using Icon Packs")()(),
};

type urlKeys = keyof typeof urls;

describe("Icon", () => {
  setupVisualTesting("Icon");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it("should render icon correctly", () => {
    visit();

    context.icon.should("have.length", 1);

    visualTest();
  });

  it("should render color icons correctly", () => {
    visit("withColor");

    context.icon.should("have.length", 2);

    visualTest();
  });

  it("should render inside a 'Button' properly", () => {
    visit("buttonWithIcon");

    context.button.should("be.visible").within(() => {
      context.icon.should("have.length", 1);
    });

    visualTest();
  });

  it("should render all braze defined icons", () => {
    visit("brazeIcons");

    context.specificIcon("drag-and-drop").should("be.visible");

    context.specificIcon("html").should("be.visible");

    context.specificIcon("push").should("be.visible");

    visualTest();
  });

  it("should render icon pack icons correctly", () => {
    visit("iconPacks");

    context.specificIcon("github").should("be.visible");

    context.specificIcon("braille").should("be.visible");

    visualTest();
  });
});
