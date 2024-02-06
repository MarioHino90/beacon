/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
import { getStorybookURL, makeContext } from "@braze/cypress-utils";
import { radioButton, radioButtonGroup } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("annotation", {
  button: () => cy.get("button"),
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

const story = getStorybookURL("Core/Forms/RadioButtonGroup");

type urlKeys = "basic" | "group" | "invalid" | "horizontal";

const urls: { [K in urlKeys]: string } = {
  basic: story("basic use")()(),
  invalid: story("invalid use")()(),
  horizontal: story("horizontal stacking")()(),
  group: story("external state controlling checked")()(),
};

function visit(page: urlKeys) {
  cy.visit(urls[page]);
}

describe("RadioButtonGroup", () => {
  setupVisualTesting("RadioButtonGroup");

  it("should allow programmatically updating the state", () => {
    visit("group");

    // verify pre-conditions
    context.radioButtonGroup.in((group) => {
      group.buttons.in((buttons) => {
        buttons.selectedRadioButton.should("have.value", "choose");
      });
    });

    context.otherButtons.in((buttons) => {
      buttons.chooseButton.should("have.attr", "data-active");
    });

    // test state change from the buttons
    context.otherButtons.in((buttons) => {
      buttons.asapButton.click();
    });

    context.otherButtons.in((buttons) => {
      buttons.asapButton.should("have.attr", "data-active");
    });

    context.radioButtonGroup.in((group) => {
      group.buttons.in((buttons) => {
        buttons.radioButtonWithValue("asap").should("be.checked");

        buttons.radioButtonWithValue("choose").should("not.be.checked");

        buttons.radioButtonWithValue("intelligent").should("not.be.checked");
      });
    });

    // test state change from the radios
    context.radioButtonGroup.in((group) => {
      group.buttons.in((buttons) => {
        buttons.radioButtonWithValue("intelligent").click({ force: true });

        buttons.radioButtonWithValue("asap").should("not.be.checked");

        buttons.radioButtonWithValue("choose").should("not.be.checked");

        buttons.radioButtonWithValue("intelligent").should("be.checked");
      });
    });

    context.otherButtons.in((buttons) => {
      buttons.intelligentButton.should("have.attr", "data-active");
    });
  });

  it("should render basic display", () => {
    visit("basic");

    visualTest();
  });

  it("should render invalid display", () => {
    visit("invalid");

    visualTest();
  });

  it("should render horizontal display", () => {
    visit("horizontal");

    visualTest();
  });
});
