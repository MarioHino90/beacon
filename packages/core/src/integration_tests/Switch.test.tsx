/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import { switchComponent, simpleSwitch } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("switch", {
  switchComponent,
  simpleSwitch,
  aria: {
    self: () => cy.get(".alt-aria-labels"),
    children: {
      switch1: () => cy.get("li:eq(0)"),
      switch2: () => cy.get("li:eq(1)"),
    },
  },
});
const story = getStorybookControlsURL("Core/Primitives/Switch");

type urlKeys = "default" | "disabled" | "ariaLabel" | "disabled";

const urls: {
  [K in urlKeys]: string;
} = {
  default: story("basic use")()(),
  disabled: story("disabled use")()(),
  ariaLabel: story("Use without label or children")()(),
};
const expectCheckedValue = (value: boolean) =>
  cy.get(".checked-value").should("have.text", `${value}`);

describe("Switch", () => {
  setupVisualTesting("Switch");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it(`should let user check it by clicking on the styled switch`, () => {
    visit();

    // verify that it's checked to start with
    expectCheckedValue(true);

    // take a visual snapshot
    visualTest("Switch checked");

    // next, attempt to check the switch by clicking on the styled switch
    context.switchComponent.in((switchComponent) => {
      switchComponent.simpleSwitch.in((simpleSwitch) => {
        simpleSwitch.styledSwitch.click();
      });
    });

    // now verify that the checked value has become true
    expectCheckedValue(false);

    // take a visual snapshot
    visualTest("Switch not checked");
  });

  it(`should let user check it by pressing 'space' when focused on the switch`, () => {
    visit();

    // verify that it's checked to start with
    expectCheckedValue(true);

    // next, attempt to check the by pressing focusing on and pressing space on the styled switch
    context.switchComponent.in((switchComponent) => {
      switchComponent.simpleSwitch.in((simpleSwitch) => {
        simpleSwitch.styledSwitch.focus();

        simpleSwitch.styledSwitch.realPress(" ");
      });
    });

    // now verify that the checked value has become false
    expectCheckedValue(false);
  });

  it(`should NOT let user check it by clicking on the styled switch when disabled`, () => {
    visit("disabled");

    // verify that it's checked to start with
    expectCheckedValue(true);

    // take a visual snapshot
    visualTest("Disabled switch");

    // next, attempt to check the switch by clicking on the styled switch
    cy.get(".2fa-switch").within(() => {
      context.simpleSwitch.in((simpleSwitch) => {
        simpleSwitch.styledSwitch.click();
      });
    });

    // now verify that the checked value is still true
    expectCheckedValue(true);
  });

  it(`should NOT let user focus on the switch when disabled`, () => {
    visit("disabled");

    // verify that it's checked to start with
    expectCheckedValue(true);

    // next, attempt to check the by pressing focusing on and pressing space on the styled switch
    cy.get(".2fa-switch").within(() => {
      context.simpleSwitch.in((simpleSwitch) => {
        simpleSwitch.styledSwitch.focus();

        simpleSwitch.styledSwitch.realPress(" ");
      });
    });

    // now verify that the checked value is still true
    expectCheckedValue(true);
  });

  it("should use alternate sources for aria-label", () => {
    visit("ariaLabel");

    context.aria.in((aria) => {
      aria.switch1.within(() => {
        context.switchComponent.in((switchComponent) => {
          switchComponent.simpleSwitch.in((simpleSwitch) => {
            simpleSwitch.hiddenSwitch.should(
              "have.attr",
              "aria-label",
              "No Label Switch"
            );
          });
        });
      });

      aria.switch2.within(() => {
        context.switchComponent.in((switchComponent) => {
          switchComponent.simpleSwitch.in((simpleSwitch) => {
            simpleSwitch.hiddenSwitch.should(
              "have.attr",
              "aria-label",
              "using children"
            );
          });
        });
      });
    });
  });
});
