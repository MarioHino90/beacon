/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import { checkbox } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("checkbox", {
  checkbox,
});

const story = getStorybookControlsURL("Core/Forms/Checkbox");

type urlKeys =
  | "default"
  | "disabled"
  | "indeterminate"
  | "invalid"
  | "invalidNoMessage"
  | "noId"
  | "helpTextWithInvalid";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  disabled: story("disabled use")()(),
  invalid: story("invalid state")()(),
  invalidNoMessage: story("invalid state no message")()(),
  noId: story("no id")()(),
  indeterminate: story("indeterminate use")()(),
  helpTextWithInvalid: story("with help text")([
    {
      type: "boolean",
      name: "invalid",
      value: true,
    },
    {
      type: "text",
      name: "errorText",
      value: "error text on checkbox",
    },
  ])(),
};

describe("Checkbox", () => {
  setupVisualTesting("Checkbox");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it(`should let user check it by clicking on the styled checkbox`, () => {
    visit();

    // verify that it's unchecked to start with
    cy.get(".checked-value").should("have.text", "false");

    // take snapshot without checked
    visualTest();

    // next, attempt to check the checkbox by clicking on the styled checkbox
    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox.click();
    });

    // now verify that the checked value has become true
    cy.get(".checked-value").should("have.text", "true");

    // take snapshot checked
    visualTest();
  });

  it(`should let user check it by clicking on the checkbox label`, () => {
    visit();

    // verify that it's unchecked to start with
    cy.get(".checked-value").should("have.text", "false");

    // next, attempt to check the checkbox by clicking on the label
    context.checkbox.in((checkbox) => {
      checkbox.label.click();
    });

    // now verify that the checked value has become true
    cy.get(".checked-value").should("have.text", "true");
  });

  it(`should let user check it by pressing 'space' when focused on the checkbox`, () => {
    visit();

    // verify that it's unchecked to start with
    cy.get(".checked-value").should("have.text", "false");

    // next, attempt to check the by pressing focusing on and pressing space on the styled checkbox
    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox.focus();

      checkbox.styledCheckbox.type(" ");
    });

    // now verify that the checked value has become true
    cy.get(".checked-value").should("have.text", "true");
  });

  it(`should NOT let user check it by clicking on the styled check box when disabled`, () => {
    visit("disabled");

    // verify that it's unchecked to start with
    cy.get(".checked-value").should("have.text", "false");

    // take snapshot disabled
    visualTest();

    // next, attempt to check the checkbox by clicking on the styled checkbox
    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox.click();
    });

    // now verify that the checked value is still false
    cy.get(".checked-value").should("have.text", "false");
  });

  it(`should NOT let user check it by clicking on the checkbox label when disabled`, () => {
    visit("disabled");

    // verify that it's unchecked to start with
    cy.get(".checked-value").should("have.text", "false");

    // next, attempt to check the checkbox by clicking on the styled checkbox
    context.checkbox.in((checkbox) => {
      checkbox.label.click();
    });

    // now verify that the checked value is still false
    cy.get(".checked-value").should("have.text", "false");
  });

  it(`should NOT let user focus on the checkbox when disabled`, () => {
    visit("disabled");

    // verify that it's unchecked to start with
    cy.get(".checked-value").should("have.text", "false");

    // next, attempt to check the by pressing focusing on and pressing space on the styled checkbox
    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox.focus();

      checkbox.styledCheckbox.type(" ");
    });

    // now verify that the checked value is still false
    cy.get(".checked-value").should("have.text", "false");
  });

  it(`should let you click the label to check the box when no id is passed in`, () => {
    visit("noId");

    context.checkbox.in((checkbox) => {
      // verify that it's unchecked to start with
      checkbox.hiddenCheckbox.should("not.be.checked");

      // next, attempt to check the by pressing focusing on and pressing space on the styled checkbox
      checkbox.label.click();

      // now verify that the checked value is still false
      checkbox.hiddenCheckbox.should("be.checked");
    });
  });

  it("should render an indetermine checkbox correctly", () => {
    visit("indeterminate");

    // verify that the checkbox is visible
    context.checkbox.should("be.visible");

    // take a snapshot when it appears indeterminate
    visualTest();
  });

  it("should render an invalid checkbox correctly", () => {
    visit("invalid");

    // verify that the checkbox is visible
    context.checkbox.should("be.visible");

    // take a snapshot when it appears indeterminate
    visualTest();
  });

  it("should render an invalid checkbox with no error message correctly", () => {
    visit("invalidNoMessage");

    // verify that the checkbox is visible
    context.checkbox.should("be.visible");

    // take a snapshot when it appears indeterminate
    visualTest();
  });

  it("should render helpText when invalid", () => {
    visit("helpTextWithInvalid");

    // helpText should be visible
    context.checkbox.children(".bcl-help-text").should("be.visible");

    visualTest();
  });
});
