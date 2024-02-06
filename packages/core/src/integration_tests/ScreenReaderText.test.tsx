/* eslint-disable jest/expect-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { screenReaderText } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("screenReaderText", { screenReaderText });

const stories = getStorybookURL("Core/Content Display/ScreenReaderText");
const basicUse = stories("basic use");

type UrlKeys = "default";

const urls: { [K in UrlKeys]: string } = {
  default: basicUse()(),
};

describe("ScreenReaderText", () => {
  function visit(page: UrlKeys = "default") {
    cy.visit(urls[page]);
  }

  setupVisualTesting("ScreenReaderText");

  it("should successfully render default ScreenReaderText", () => {
    visit();

    // using test_utils helpers
    context.screenReaderText.should("be.visible");

    context.screenReaderText.should(
      "have.text",
      "Click the button to open the menu, click outside of the menu to close."
    );

    visualTest();
  });
});
