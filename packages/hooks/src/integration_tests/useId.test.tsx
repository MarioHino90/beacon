/* eslint-disable jest/expect-expect */
/// <reference types="@testing-library/cypress" />
import { getStorybookURL } from "@braze/cypress-utils";

const story = getStorybookURL("Core/Hooks/useId");

type pageValues = "default" | "noPrefix";

const urls: { [K in pageValues]: string } = {
  default: story("basic use")()(),
  noPrefix: story("no prefix")()(),
};

describe("useId hook", () => {
  function visit(page: pageValues = "default") {
    cy.visit(urls[page]);
  }

  function assertId(pattern: RegExp) {
    cy.get("div.id-location").should("have.attr", "id").and("match", pattern);
  }

  it("generates an id with the supplied prefix", () => {
    visit("default");

    assertId(/^demo-prefix-\d+$/);
  });

  it("only provides a number when no prefix is provided", () => {
    visit("noPrefix");

    assertId(/^\d+$/);
  });
});
