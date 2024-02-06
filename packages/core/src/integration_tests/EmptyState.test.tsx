/* eslint-disable jest/expect-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { emptyState } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const stories = getStorybookURL("Core/Content Display/EmptyState");

type UrlKeys = "default" | "noButtons";

const urls: {
  [K in UrlKeys]: string;
} = {
  default: stories("basic use")()(),
  noButtons: stories("no buttons")()(),
};

describe("EmptyState", () => {
  setupVisualTesting("EmptyState");

  function visit(page: UrlKeys = "default") {
    cy.visit(urls[page]);
  }

  const context = makeContext("emptyState", { emptyState });

  it("should successfully render", () => {
    visit();

    context.emptyState.should("be.visible");

    context.emptyState.in((body) => {
      body.icon.should("be.visible");

      body.heading.should("be.visible");

      body.text.should("be.visible");

      body.buttons.should("be.visible");

      body.buttons.in((buttons) => {
        buttons.buttons.should("have.length", "1");

        buttons.button(1).should("be.visible");
      });
    });

    visualTest();
  });

  it("should successfully render when call to action is a link", () => {
    visit("noButtons");

    context.emptyState.should("be.visible");

    context.emptyState.in((body) => {
      body.icon.should("be.visible");

      body.heading.should("be.visible");

      body.text.should("be.visible");

      body.buttons.should("not.exist");
    });

    visualTest();
  });
});
