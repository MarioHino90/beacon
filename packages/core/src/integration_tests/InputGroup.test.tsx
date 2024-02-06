/* eslint-disable jest/expect-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { inputGroup } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("inputGroup", { inputGroup });
const stories = getStorybookURL("Core/Forms/InputGroup");

type UrlKeys =
  | "default"
  | "disabled"
  | "secondary"
  | "invalid"
  | "fullWidth"
  | "small";

const urls: {
  [K in UrlKeys]: string;
} = {
  default: stories("basic use")()(),
  secondary: stories("secondary use")()(),
  invalid: stories("invalid use")()(),
  fullWidth: stories("full width")()(),
  small: stories("vertical size")()(),
  disabled: stories("basic use")([
    { type: "boolean", name: "Disabled", value: true },
  ])(),
};

describe("InputGroup", () => {
  setupVisualTesting("InputGroup");

  function visit(page: UrlKeys = "default") {
    cy.visit(urls[page]);
  }

  // assign some text and number content to variables
  const textContent = "This is a bunch of random words";
  const numberContent = 12345;

  it("should allow user to type into input field inside an input group", () => {
    visit();

    // take a visual snapshot
    visualTest("basic display");

    // type into the input field
    context.inputGroup.in((inputGroup) => {
      inputGroup.input.type(textContent);
    });

    // check that the value was updated correctly
    cy.get(".input-value").should("have.text", textContent);

    // take a visual snapshot
    visualTest("with value");
  });

  it("should allow user to type into input field inside an input group with a prefix", () => {
    visit("secondary");

    // take a visual snapshot
    visualTest("basic display");

    // type into the input field
    context.inputGroup.in((inputGroup) => {
      // type into the input field
      inputGroup.input.type(`${numberContent}`);

      // verify that the value of the input updated
      inputGroup.input.should("have.value", numberContent);

      // take a visual snapshot
      visualTest("with value");
    });
  });

  it("should allow user to type into an invalid input field inside an input group", () => {
    visit("invalid");

    // take a visual snapshot
    visualTest("basic display");

    // type into the input field
    context.inputGroup.in((inputGroup) => {
      // type into the input field
      inputGroup.input.type(textContent);

      // verify that the value of the input updated
      inputGroup.input.should("have.value", textContent);

      // take a visual snapshot
      visualTest("with value");
    });
  });

  it("should allow user to type into an input field inside a full width input group", () => {
    visit("fullWidth");

    // take a visual snapshot
    visualTest("basic display");

    // type into the input field
    context.inputGroup.in((inputGroup) => {
      // type into the input field
      inputGroup.input.type(`${numberContent}`);

      // verify that the value of the input updated
      inputGroup.input.should("have.value", numberContent);

      // take a visual snapshot
      visualTest("with value");
    });
  });

  it("should allow user to type into an invalid input field inside a small input group", () => {
    visit("small");

    // take a visual snapshot
    visualTest("basic display");

    // type into the input field
    context.inputGroup.in((inputGroup) => {
      // type into each of the fields
      inputGroup.input.each(($input) => {
        cy.wrap($input)
          // type into the input field
          .type(`${numberContent}`)
          // verify that the value of the input updated
          .should("have.value", numberContent);
      });

      // take a visual snapshot
      visualTest("with value");
    });
  });

  it("should NOT allow user to type into input field inside an input group when input group is disabled and also give it a disabled className", () => {
    visit("disabled");

    // check that the input group has disabled as class name
    context.inputGroup.should("have.class", "disabled");

    // check that the input field is disabled
    context.inputGroup.in((inputGroup) => {
      inputGroup.input.should("be.disabled");
    });

    // take a visual snapshot
    visualTest("disabled");
  });
});
