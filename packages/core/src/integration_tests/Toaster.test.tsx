/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { toaster, toastCloseButton } from "@braze/beacon-test-utils";

const story = getStorybookControlsURL("Core/Alerts/Toaster");
const context = makeContext("toaster", {
  toaster,
  toastCloseButton,
  makeToastButton: () => cy.get(".make-toast"),
  dismissToastButton: () => cy.get(".dismiss-toast"),
  dismissAllToastsButton: () => cy.get(".dismiss-all-toasts"),
  toastTypeSelect: () => cy.get(".toast-type-select"),
});

type urlKeys =
  | "default"
  | "withLink"
  | "withQuarternaryButton"
  | "withHighLimit"
  | "withFastAutoClose"
  | "withNoAutoClose"
  | "withProgrammaticDismissal";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  withLink: story("with link")()(),
  withQuarternaryButton: story("with quaternary button")()(),
  withHighLimit: story("basic use")([
    { type: "number", name: "limit", value: 5 },
  ])(),
  withFastAutoClose: story("basic use")([
    { type: "number", name: "autoClose", value: 1000 },
  ])(),
  withNoAutoClose: story("no auto close")()(),
  withProgrammaticDismissal: story("With Programmatic Dismissal")()(),
};

function visit(page: urlKeys = "default") {
  cy.visit(urls[page].replace("id=", "path=/story/"));
}

describe("Toaster", () => {
  setupVisualTesting("Toaster");

  it("should function correctly by default", () => {
    visit("default");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click on button to make toast
    context.makeToastButton.click();

    // check that the toaster is now visible
    context.toaster.should("be.visible");

    // check that there is only one toast inside toaster
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 1);

      visualTest();
    });

    // wait 5 seconds, default period, for the toaster to disappear
    cy.wait(5000);

    // check that the toaster is gone again
    context.toaster.should("not.exist");

    // click another 4 times; by default, only 3 toasts should show
    context.makeToastButton.click().click().click().click();

    // assert...
    context.toaster.in((toaster) => {
      // ...that only 3 toasts should display by default
      toaster.toast.should("have.length", 3);

      // wait 5 seconds
      cy.wait(5000);

      // now, there should only be 1 toast
      toaster.toast.should("have.length", 1);

      // wait another 5 seconds
      cy.wait(5000);

      // there should be no toasts shown
      toaster.toast.should("have.length", 0);
    });
  });

  it("should appear correctly for the different toast types", () => {
    visit("default");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // select option 1
    context.toastTypeSelect.select(1);

    // click on button to make toast
    context.makeToastButton.click();

    // select option 2
    context.toastTypeSelect.select(2);

    // click on button to make toast
    context.makeToastButton.click();

    // select option 3
    context.toastTypeSelect.select(3);

    // click on button to make toast
    context.makeToastButton.click();

    // check that there are three toasts inside toaster
    context.toaster.in((toaster) => {
      // assert that there are three toasts
      toaster.toast.should("have.length", 3);

      // take visual snapshot
      visualTest();
    });
  });

  it("should appear correctly when used with a link across all toast types", () => {
    visit("withLink");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click on button to make toast
    context.makeToastButton.click();

    // check that the toaster is now visible
    context.toaster.should("be.visible");

    // check that there is only one toast inside toaster
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 1);

      visualTest();
    });

    cy.wait(5000);

    // select option 1
    context.toastTypeSelect.select(1);

    // click on button to make toast
    context.makeToastButton.click();

    // select option 2
    context.toastTypeSelect.select(2);

    // click on button to make toast
    context.makeToastButton.click();

    // select option 3
    context.toastTypeSelect.select(3);

    // click on button to make toast
    context.makeToastButton.click();

    // check that there are three toasts inside toaster
    context.toaster.in((toaster) => {
      // assert that there are three toasts
      toaster.toast.should("have.length", 3);

      // take visual snapshot
      visualTest();
    });
  });

  it("should appear correctly when used with a quaternary button across all toast types", () => {
    visit("withQuarternaryButton");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click on button to make toast
    context.makeToastButton.click();

    // check that the toaster is now visible
    context.toaster.should("be.visible");

    // check that there is only one toast inside toaster
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 1);

      visualTest();
    });

    cy.wait(5000);

    // select option 1
    context.toastTypeSelect.select(1);

    // click on button to make toast
    context.makeToastButton.click();

    // select option 2
    context.toastTypeSelect.select(2);

    // click on button to make toast
    context.makeToastButton.click();

    // select option 3
    context.toastTypeSelect.select(3);

    // click on button to make toast
    context.makeToastButton.click();

    // check that there are three toasts inside toaster
    context.toaster.in((toaster) => {
      // assert that there are three toasts
      toaster.toast.should("have.length", 3);

      // take visual snapshot
      visualTest();
    });
  });
});

describe("Toaster (with no visual tests)", () => {
  it("should display more toasts when limit is increased", () => {
    visit("withHighLimit");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click another 5 times; all 5 toasts should be visible
    context.makeToastButton.click().click().click().click().click();

    // assert...
    context.toaster.in((toaster) => {
      // ...that 5 toasts should display as intended
      toaster.toast.should("have.length", 5);

      // wait 5 seconds
      cy.wait(5000);

      // there should be no toasts shown
      toaster.toast.should("have.length", 0);
    });
  });

  it("should close toasts quicker when auto-close is defined (e.g. 1000 ms)", () => {
    visit("withFastAutoClose");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click make toast button
    context.makeToastButton.click();

    // assert...
    context.toaster.in((toaster) => {
      // ...that 1 toast should display as intended
      toaster.toast.should("have.length", 1);

      // wait 1 second
      cy.wait(1000);

      // there should be no toasts shown
      toaster.toast.should("have.length", 0);
    });
  });

  it("should not close toast until user dismisses it when auto-close is false", () => {
    visit("withNoAutoClose");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click make toast button
    context.makeToastButton.click();

    // assert...
    context.toaster.in((toaster) => {
      // ...that 1 toast should display as intended
      toaster.toast.should("have.length", 1);

      // wait 10 seconds
      cy.wait(10000);

      // there should still be one toast
      toaster.toast.should("have.length", 1);
    });

    // click close toast button
    context.toastCloseButton.click();

    // assert that there should now be no toasts shown
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 0);
    });
  });

  it("should allow for programmatic dismissal of a single toast", () => {
    visit("withProgrammaticDismissal");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click make toast button
    context.makeToastButton.click();

    // assert...
    context.toaster.in((toaster) => {
      // ...that 1 toast should display as intended
      toaster.toast.should("have.length", 1);

      // wait 10 seconds
      cy.wait(10000);

      // there should still be one toast
      toaster.toast.should("have.length", 1);
    });

    // click dismiss toast button
    context.dismissToastButton.click();

    // assert that there should now be no toasts shown
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 0);
    });
  });

  it("should allow for programmatic dismissal of all visible toasts", () => {
    visit("withProgrammaticDismissal");

    // assert that toaster is not visible on load
    context.toaster.should("not.exist");

    // click another 3 times; all 3 toasts should be visible
    context.makeToastButton.click().click().click();

    // assert...
    context.toaster.in((toaster) => {
      // ...that 3 toasts should display as intended
      toaster.toast.should("have.length", 3);

      // wait 10 seconds
      cy.wait(10000);

      // there should still be 3 toasts
      toaster.toast.should("have.length", 3);
    });

    // click dismiss all toasts button
    context.dismissToastButton.click();

    // assert that there should have 2 toasts still shown
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 2);
    });

    // click dismiss all toasts button
    context.dismissAllToastsButton.click();

    // assert that there should now be no toasts shown
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 0);
    });
  });
});
