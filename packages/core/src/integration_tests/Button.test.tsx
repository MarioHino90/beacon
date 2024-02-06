/* eslint-disable jest/expect-expect */
import {
  makeContext,
  getStorybookControlsURL,
  extractSelector,
  extractDeclaration,
  getActionContext,
} from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { button, disabledButtonWrapper } from "@braze/beacon-test-utils";

const story = getStorybookControlsURL("Core/Primitives/Button");

type urlKeys =
  | "clicks"
  | "disabledClicks"
  | "primary"
  | "secondary"
  | "tertiary"
  | "quaternary"
  | "disabled"
  | "disabledTooltips"
  | "sizes"
  | "loadingWithSuccess"
  | "loadingWithError";

const urls: { [K in urlKeys]: string } = {
  clicks: story("basic use")()(),
  disabledClicks: story("basic use")([
    {
      type: "boolean",
      name: "disabled",
      value: true,
    },
  ])(),
  primary: story("primary variant")()(),
  secondary: story("secondary variant")()(),
  tertiary: story("tertiary variant")()(),
  quaternary: story("quaternary variant")()(),
  disabled: story("disabled use")()(),
  disabledTooltips: story("disabled with tooltip")()(),
  sizes: story("different sizes")()(),
  loadingWithSuccess: story("loading state w/ success")()(),
  loadingWithError: story("loading state w/ error")()(),
};

function visit(page: urlKeys) {
  cy.visit(urls[page]);
}

const buttonsChildren = extractDeclaration({
  button: {
    self: (n: number) => cy.get(`button:eq(${n})`),
    needsParams: true,
    children: {},
  },
  disabledButtonWrapper: {
    self: (n: number) => disabledButtonWrapper().eq(n),
    needsParams: true,
    children: {},
  },
  clicks: () => cy.get("#clicks"),
});

const buttons = extractSelector({
  self: () => cy.get(".buttons"),
  children: buttonsChildren,
  actions: {
    buttonShouldBeVariant: (
      self,
      context,
      button: number,
      variant: "primary" | "secondary" | "tertiary" | "quaternary"
    ) => {
      self.within(() => {
        getActionContext(buttonsChildren, context)
          .button(button)
          .should("have.class", `bcl-button-${variant}`);
      });
    },
    click: (self, context, number: number) => {
      self.within(() => {
        getActionContext(buttonsChildren, context)
          .button(number)
          .click({ force: true });
      });
    },
    shouldHaveClicks: (self, context, number: number) => {
      self.within(() => {
        getActionContext(buttonsChildren, context).clicks.should(
          "have.text",
          `Clicked ${number} times`
        );
      });
    },
  },
});

const context = makeContext("Braze buttons", {
  clicks: () => cy.get("#clicks"),
  buttons,
  button,
});

describe("Button", () => {
  setupVisualTesting("Button");

  it("should respond to clicks when not disabled", () => {
    visit("clicks");

    context.buttons.actions.click(0);

    context.buttons.actions.shouldHaveClicks(1);

    context.buttons.actions.click(0);

    context.buttons.actions.shouldHaveClicks(2);

    context.buttons.actions.click(1);

    context.buttons.actions.shouldHaveClicks(3);

    context.buttons.actions.click(1);

    context.buttons.actions.shouldHaveClicks(4);
  });

  it("should not respond to clicks when disabled", () => {
    visit("disabledClicks");

    context.buttons.actions.click(0);

    context.buttons.actions.shouldHaveClicks(0);

    context.buttons.actions.click(1);

    context.buttons.actions.shouldHaveClicks(0);
  });

  it("should render primary buttons", () => {
    visit("primary");

    context.buttons.actions.buttonShouldBeVariant(0, "primary");

    visualTest();
  });

  it("should render secondary buttons", () => {
    visit("secondary");

    context.buttons.actions.buttonShouldBeVariant(0, "secondary");

    visualTest();
  });

  it("should render tertiary buttons", () => {
    visit("tertiary");

    context.buttons.actions.buttonShouldBeVariant(0, "tertiary");

    visualTest();
  });

  it("should render quaternary buttons", () => {
    visit("quaternary");

    context.buttons.actions.buttonShouldBeVariant(0, "quaternary");

    visualTest();
  });

  it("should render disabled buttons", () => {
    visit("disabled");

    visualTest();
  });

  it("should allow disabled buttons to have tooltips and annotations", () => {
    visit("disabledTooltips");

    cy.findByText("launching is disabled for this archived campaign").should(
      "not.exist"
    );

    context.buttons.in((buttons) => {
      buttons.disabledButtonWrapper(0).trigger("mouseenter");
    });

    cy.findByText("launching is disabled for this archived campaign").should(
      "be.visible"
    );

    cy.findByText(
      "There was a problem deleting this current. Refresh your page and try again."
    ).should("not.exist");

    context.buttons.in((buttons) => {
      buttons.disabledButtonWrapper(1).trigger("mouseenter");
    });

    cy.findByText(
      "There was a problem deleting this current. Refresh your page and try again."
    ).should("be.visible");
  });

  it("should render different sizes of buttons", () => {
    visit("sizes");

    visualTest();
  });

  it("should handle loading state management with success correctly", () => {
    visit("loadingWithSuccess");

    context.buttons
      .eq(0)
      .should("have.text", "Primary")
      .should("not.contain.text", "Loading...");

    context.buttons.eq(0).within(() => {
      cy.get(".bcl-loading-spinner").should("not.exist");

      cy.get(".fa-check", { timeout: 5000 }).should("not.exist");
    });

    context.buttons.actions.click(0);

    context.buttons
      .eq(0)
      .should("not.have.text", "Primary")
      .should("contain.text", "Loading...");

    visualTest("loading");

    context.buttons.eq(0).within(() => {
      cy.get(".bcl-loading-spinner").should("be.visible");

      cy.get(".fa-check", { timeout: 5000 }).should("be.visible");
    });

    visualTest("success state");

    cy.wait(3000);

    context.buttons
      .eq(0)
      .should("have.text", "Primary")
      .should("not.contain.text", "Loading...");

    context.buttons.eq(0).within(() => {
      cy.get(".bcl-loading-spinner").should("not.exist");

      cy.get(".fa-check", { timeout: 5000 }).should("not.exist");
    });
  });

  it("should handle loading state management with error correctly", () => {
    visit("loadingWithError");

    context.buttons
      .eq(0)
      .should("have.text", "Primary")
      .should("not.contain.text", "Loading...");

    context.buttons.eq(0).within(() => {
      cy.get(".bcl-loading-spinner").should("not.exist");

      cy.get(".fa-times").should("not.exist");
    });

    context.button.eq(0).click();

    context.buttons
      .eq(0)
      .should("not.have.text", "Primary")
      .should("contain.text", "Loading...");

    visualTest("loading");

    context.buttons.eq(0).within(() => {
      cy.get(".bcl-loading-spinner").should("be.visible");

      cy.get(".fa-times", { timeout: 5000 }).should("be.visible");
    });

    cy.wait(3000);

    context.buttons.eq(0).should("not.have.text", "Primary");

    context.buttons.eq(0).within(() => {
      cy.get(".fa-times").should("be.visible");
    });

    visualTest("error state");

    cy.get(".reset-loading-state-btn").click();

    context.buttons
      .eq(0)
      .should("have.text", "Primary")
      .should("not.contain.text", "Loading...");

    context.buttons.eq(0).within(() => {
      cy.get(".bcl-loading-spinner").should("not.exist");

      cy.get(".fa-times").should("not.exist");
    });
  });
});
