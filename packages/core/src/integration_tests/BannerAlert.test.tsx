/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import {
  bannerAlert,
  untransitionedBannerAlert,
} from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

const context = makeContext("bannerAlert", {
  bannerAlert,
  untransitionedBannerAlert,
});

const story = getStorybookControlsURL("Core/Alerts/BannerAlert");

type urlKeys =
  | "default"
  | "warning"
  | "danger"
  | "info"
  | "noTransition"
  | "optionalClose"
  | "inForm"
  | "customLink"
  | "accordionSuccess"
  | "accordionWarning"
  | "accordionDanger"
  | "accordionInfo"
  | "accordionSuccessClosed"
  | "accordionWarningClosed"
  | "accordionDangerClosed"
  | "accordionInfoClosed";

const urls: { [K in urlKeys]: string } = {
  default: story("Basic Use")()(),
  warning: story("Basic Use")([
    {
      type: "select",
      name: "intent",
      value: "warning",
    },
  ])(),
  danger: story("Basic Use")([
    {
      type: "select",
      name: "intent",
      value: "danger",
    },
  ])(),
  info: story("Basic Use")([
    {
      type: "select",
      name: "intent",
      value: "info",
    },
  ])(),
  noTransition: story("Without Transition")()(),
  optionalClose: story("Optional Close Button")()(),
  inForm: story("Inside a Form")()(),
  customLink: story("Custom Link Component")()(),
  accordionSuccess: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "success",
    },
  ])(),
  accordionWarning: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "warning",
    },
  ])(),
  accordionDanger: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "danger",
    },
  ])(),
  accordionInfo: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "info",
    },
  ])(),
  accordionSuccessClosed: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "success",
    },
    {
      type: "boolean",
      name: "isOpen",
      value: false,
    },
  ])(),
  accordionWarningClosed: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "warning",
    },
    {
      type: "boolean",
      name: "isOpen",
      value: false,
    },
  ])(),
  accordionDangerClosed: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "danger",
    },
    {
      type: "boolean",
      name: "isOpen",
      value: false,
    },
  ])(),
  accordionInfoClosed: story("Accordion")([
    {
      type: "select",
      name: "intent",
      value: "info",
    },
    {
      type: "boolean",
      name: "isOpen",
      value: false,
    },
  ])(),
};

describe("BannerAlert", () => {
  function visit(page: urlKeys = "default") {
    cy.visit(urls[page]);
  }

  setupVisualTesting("BannerAlert");

  it(`should close banner alert when close button is pressed`, () => {
    visit();

    // first, check that the banner alert is displayed
    context.bannerAlert.should("be.visible");

    visualTest();

    // now, attempt to close the banner alert
    context.bannerAlert.in((bannerAlert) => {
      bannerAlert.body.in((body) => {
        body.close.click();
      });
    });

    // check that the banner alert is no longer displayed
    context.bannerAlert.should("not.be.visible");

    visualTest();

    // attempt to reopen the banner alert
    cy.get(".open-banner").click();

    // finally, check that the banner alert is displayed again
    context.bannerAlert.should("be.visible");
  });

  it(`should not display the close button when it's optional`, () => {
    visit("optionalClose");

    // first, check that the banner alert is displayed
    context.bannerAlert.should("be.visible");

    // also check that the close button should not exist
    context.bannerAlert.in((bannerAlert) => {
      bannerAlert.body.in((body) => {
        body.close.should("not.exist");
      });
    });

    visualTest();
  });

  it(`should render the correct component in the untransitioned variant`, () => {
    visit("noTransition");

    // verify that the correct component was rendered
    context.untransitionedBannerAlert.should("be.visible");
  });

  it(`should not trigger a submit when the close button is pressed inside a form`, () => {
    visit("inForm");

    // verify that the correct component was rendered
    context.bannerAlert.in((bannerAlert) => {
      bannerAlert.body.in((body) => {
        body.close.click();
      });
    });

    // confirm that the alert is closed
    context.bannerAlert.should("not.be.visible");

    // check that the form is not submitted
    cy.get(".submission-status").should(
      "have.text",
      "The form has not been submitted."
    );
  });

  it("should render an `a` tag link", () => {
    visit("customLink");

    visualTest();
  });

  it("should render warning intent", () => {
    visit("warning");

    visualTest();
  });

  it("should render danger intent", () => {
    visit("danger");

    visualTest();
  });

  it("should render info intent", () => {
    visit("info");

    visualTest();
  });

  it("should render accordion success intent", () => {
    visit("accordionSuccess");

    visualTest();

    visit("accordionSuccessClosed");

    visualTest();
  });

  it("should render accordion warning intent", () => {
    visit("accordionWarning");

    visualTest();

    visit("accordionWarningClosed");

    visualTest();
  });

  it("should render accordion danger intent", () => {
    visit("accordionDanger");

    visualTest();

    visit("accordionDangerClosed");

    visualTest();
  });

  it("should render accordion info intent", () => {
    visit("accordionInfo");

    visualTest();

    visit("accordionInfoClosed");

    visualTest();
  });
});
