/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookURL } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { tabs } from "@braze/beacon-test-utils";

const story = getStorybookURL("Commons/Content Display/UncontrolledTabs");
const context = makeContext("tabs", { tabs });

type urlKeys = "default" | "disabled";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  disabled: story("disabled use")()(),
};

describe("UncontrolledTabs", () => {
  setupVisualTesting("UncontrolledTabs");

  function visit(page: urlKeys = "default") {
    cy.visit(urls[page].replace("id=", "path=/story/"));
  }

  it("should function correctly", () => {
    visit("default");

    // check that tabs are displaying
    context.tabs.should("be.visible");

    context.tabs.in((tabs) => {
      // first tab should be active by default in this example
      tabs.nthTab(2).should("have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest();

      // switch to section 1 tab
      tabs.nthTab(1).click().should("have.class", "bcl-tab-active");

      // second tab should no longer have active class
      tabs.nthTab(2).should("not.have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest("Tab 1 selected");

      // switch to section 3 tab
      tabs.nthTab(3).click().should("have.class", "bcl-tab-active");

      // second tab should no longer have active class
      tabs.nthTab(2).should("not.have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest("Tab 3 selected");
    });
  });

  it("should function correctly using key press", () => {
    visit("default");

    // check that tabs are displaying
    context.tabs.should("be.visible");

    context.tabs.in((tabs) => {
      // first tab should be active by default in this example
      tabs.nthTab(2).focus().should("have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest();

      // tab to the next... tab
      cy.realPress("Tab");

      // press space to select it
      cy.realPress("Space");

      // switch to section 3 tab
      tabs.nthTab(3).should("have.class", "bcl-tab-active");

      // first tab should no longer have active class
      tabs.nthTab(2).should("not.have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest("Tab 3 selected");

      // focus on the first tab
      tabs.nthTab(1).focus();

      // press enter to select it
      cy.realPress("Enter");

      // switch to section 3 tab
      tabs.nthTab(1).should("have.class", "bcl-tab-active");

      // third tab should no longer have active class
      tabs.nthTab(3).should("not.have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest("Tab 1 selected");
    });
  });

  it("should not allow tab to be selected when disabled", () => {
    visit("disabled");

    // check that tabs are displaying
    context.tabs.should("be.visible");

    context.tabs.in((tabs) => {
      // first tab should be active by default in this example
      tabs.nthTab(1).should("have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest();

      // assert that the tab has the 'disabled' tag
      tabs.nthTab(2).should("have.attr", "disabled");

      // attempt to click on the disabled tab and assert that it doesn't work
      tabs
        .nthTab(2)
        .trigger("click")
        .should("not.have.class", "bcl-tab-active");

      // switch to section 3 tab
      tabs.nthTab(3).click().should("have.class", "bcl-tab-active");

      // second tab should no longer have active class
      tabs.nthTab(2).should("not.have.class", "bcl-tab-active");

      // take visual snapshot
      visualTest("Tab 3 selected");
    });
  });
});
