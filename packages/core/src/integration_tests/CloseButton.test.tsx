/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { closeButton } from "@braze/beacon-test-utils";

const context = makeContext("CloseButton", { closeButton });
const story = getStorybookURL("Core/Primitives/CloseButton");

type UrlKeys = "default" | "sizeLg";

const urls: { [K in UrlKeys]: string } = {
  default: story("basic use")()(),
  sizeLg: story("large use")()(),
};

function visit(page: UrlKeys = "default") {
  cy.visit(urls[page]);
}

describe("CloseButton", () => {
  setupVisualTesting("CloseButton");

  it("should appear correctly", () => {
    visit();

    context.closeButton.should("be.visible");

    visualTest();
  });

  it("should appear correctly when size is 'lg'", () => {
    visit("sizeLg");

    context.closeButton.should("be.visible");

    visualTest();
  });

  it("should appear correctly when focused", () => {
    visit();

    context.closeButton.should("be.visible").focus();

    visualTest();
  });

  it("should appear correctly when focused and size is 'lg'", () => {
    visit("sizeLg");

    context.closeButton.should("be.visible").focus();

    visualTest();
  });
});
