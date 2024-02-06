/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { textarea } from "@braze/beacon-test-utils";

const story = getStorybookURL("Core/Forms/Textarea");
const context = makeContext("textarea", { textarea });

type urlKeys = "default" | "disabled" | "invalid" | "sizes";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  disabled: story("disabled")()(),
  invalid: story("invalid")()(),
  sizes: story("different sizes")()(),
};

describe("Textarea", () => {
  setupVisualTesting("Textarea");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page].replace("id=", "path=/story/"));
  }

  it("should function correctly as an input field", () => {
    visit("default");

    // assert that textarea is visible
    context.textarea.should("be.visible");

    // run a visual test
    visualTest();

    // get some text in thur
    const innerText = "Hi, there!";

    // next, type into it
    context.textarea.type(innerText);

    // next, grab the 'textarea-value' class and verify its contents
    cy.get(".textarea-value").should("have.text", innerText);
  });

  it("should not allow any input when disabled", () => {
    visit("disabled");

    // next, verify that the HTML element is disabled
    context.textarea.should("be.disabled");

    // run a visual test
    visualTest();
  });

  it("should appear correctly when invalid", () => {
    visit("invalid");

    // assert that textarea is visible
    context.textarea.should("be.visible");

    // run a visual test
    visualTest();
  });

  it("should appear correctly in different sizes", () => {
    visit("sizes");

    // assert that textarea is visible
    context.textarea.should("be.visible");

    // run a visual test
    visualTest();
  });
});
