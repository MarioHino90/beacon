/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import { radioButton, radioButtonGroup } from "@braze/beacon-test-utils";
import { visualTest, setupVisualTesting } from "@braze/beacon-cypress-helpers";

const context = makeContext("RadioButton", {
  button: () => cy.findByText("Toggle radio button"),
  radioButton,
  radioButtonGroup,
  otherButtons: {
    self: () => cy.get("#other-buttons"),
    children: {
      asapButton: () =>
        cy.findByText("Send as soon as campaign is launched").closest("button"),
      chooseButton: () =>
        cy.findByText("Send at a designated time").closest("button"),
      intelligentButton: () =>
        cy.findByText("Intelligent Timing").closest("button"),
    },
  },
});

const story = getStorybookControlsURL("Core/Forms/RadioButton");

type urlKeys = "update" | "basic" | "children" | "help" | "invalid";

const urls: { [K in urlKeys]: string } = {
  update: story("update programmatically later")()(),
  basic: story("basic use")()(),
  children: story("with children")()(),
  help: story("with help text")()(),
  invalid: story("invalid entry")()(),
};

function visit(page: urlKeys) {
  cy.visit(urls[page]);
}

describe("RadioButton", () => {
  setupVisualTesting("RadioButton");

  it("should allow programmatically updating the state", () => {
    visit("update");

    context.radioButton.in((container) => {
      container.button.should("not.be.checked");
    });

    context.button.click();

    context.radioButton.in((container) => {
      container.button.should("be.checked");
    });

    context.button.click();

    context.radioButton.in((container) => {
      container.button.should("not.be.checked");
    });

    context.radioButton.in((container) => {
      container.button.then(([button]) => {
        cy.wrap(button.getAttribute("id")).should(
          "match",
          /^radio-button-(\d+)$/
        );
      });
    });
  });

  it("should render basic state", () => {
    visit("basic");

    visualTest();
  });

  it("should render with children", () => {
    visit("children");

    visualTest();
  });

  it("should render with help text", () => {
    visit("help");

    visualTest();
  });

  it("should render invalid state", () => {
    visit("invalid");

    visualTest();
  });
});
