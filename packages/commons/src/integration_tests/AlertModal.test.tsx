/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { button, modal } from "@braze/beacon-test-utils";

const context = makeContext("alertModal", { button, modal });
const story = getStorybookControlsURL("Commons/Alerts/AlertModal");

type urlKeys = "default" | "warning" | "danger" | "success";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  danger: story("danger use")()(),
  success: story("success use")()(),
  warning: story("warning use")()(),
};

describe("AlertModal", () => {
  setupVisualTesting("AlertModal");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  it("should render correctly with no explicit intent", () => {
    // visit page
    visit();

    // verify that modal isn't showing on first load
    context.modal.should("not.exist");

    // open modal
    context.button.click();

    // check that the modal has appeared
    context.modal.in((modal) => {
      modal.body.should("be.visible");
    });

    // take snapshot
    visualTest();

    // close the modal via the close button
    context.modal.in((modal) => {
      modal.closeButton.click();
    });

    // verify that the modal is gone again
    context.modal.should("not.exist");
  });

  it("should render correctly with 'danger' intent", () => {
    // visit page
    visit("danger");

    // verify that modal isn't showing on first load
    context.modal.should("not.exist");

    // open modal
    context.button.click();

    // check that the modal has appeared
    context.modal.in((modal) => {
      modal.body.should("be.visible");
    });

    // take snapshot
    visualTest();

    // close the modal via the close button
    context.modal.in((modal) => {
      modal.closeButton.click();
    });

    // verify that the modal is gone again
    context.modal.should("not.exist");
  });

  it("should render correctly with 'success' intent", () => {
    // visit page
    visit("success");

    // verify that modal isn't showing on first load
    context.modal.should("not.exist");

    // open modal
    context.button.click();

    // check that the modal has appeared
    context.modal.in((modal) => {
      modal.body.should("be.visible");
    });

    // take snapshot
    visualTest();

    // close the modal via the close button
    context.modal.in((modal) => {
      modal.closeButton.click();
    });

    // verify that the modal is gone again
    context.modal.should("not.exist");
  });

  it("should render correctly with 'warning' intent", () => {
    // visit page
    visit("warning");

    // verify that modal isn't showing on first load
    context.modal.should("not.exist");

    // open modal
    context.button.click();

    // check that the modal has appeared
    context.modal.in((modal) => {
      modal.body.should("be.visible");
    });

    // take snapshot
    visualTest();

    // close the modal via the close button
    context.modal.in((modal) => {
      modal.closeButton.click();
    });

    // verify that the modal is gone again
    context.modal.should("not.exist");
  });
});
