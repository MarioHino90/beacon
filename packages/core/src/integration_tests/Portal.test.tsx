/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { portal, button } from "@braze/beacon-test-utils";

const story = getStorybookURL("Core/Portal");

type urlKeys = "basic" | "unmount";

const urls: { [K in urlKeys]: string } = {
  basic: story("basic use")()(),
  unmount: story("unmount")()(),
};

describe("Portal", () => {
  function visit(page: urlKeys = "basic") {
    cy.visit(urls[page]);
  }

  const context = makeContext("portal", { portal });

  it("should render portal", () => {
    cy.viewport("macbook-15");

    visit();

    context.portal.should("be.visible");
  });

  it("should unmount portal when asked", () => {
    cy.viewport("macbook-15");

    visit("unmount");

    context.portal.should("be.visible");

    button().click();

    context.portal.should("not.exist");
  });
});
