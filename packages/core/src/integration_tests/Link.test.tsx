/* eslint-disable jest/expect-expect */
import { getStorybookControlsURL, makeContext } from "@braze/cypress-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";
import { link, icon } from "@braze/beacon-test-utils";

const story = getStorybookControlsURL("Core/Primitives/Link");

type urlKeys =
  | "default"
  | "table"
  | "inline"
  | "disabled"
  | "default_open_in_new_tab"
  | "default_open_in_new_tab_with_rel";

const urls: { [K in urlKeys]: string } = {
  default: story("basic use")()(),
  default_open_in_new_tab: story("basic use")([
    {
      name: "target",
      type: "text",
      value: "_blank",
    },
    {
      name: "showExternalLinkIcon",
      type: "boolean",
      value: true,
    },
  ])("open in new tab"),
  default_open_in_new_tab_with_rel: story("basic use")([
    {
      name: "target",
      type: "text",
      value: "_blank",
    },
    {
      name: "rel",
      type: "text",
      value: "noopener noreferrer",
    },
    {
      name: "showExternalLinkIcon",
      type: "boolean",
      value: true,
    },
  ])("open in new tab with rel"),
  table: story("table variant")()(),
  inline: story("inline variant")()(),
  disabled: story("disabled use")()(),
};

const context = makeContext("Link", {
  link,
  icon,
});

function visit(page: urlKeys) {
  cy.visit(urls[page]);
}

describe("Link", () => {
  setupVisualTesting("Link");

  it("should render basic link", () => {
    visit("default");

    visualTest();
  });

  it("should render basic link opening in a new tab", () => {
    visit("default_open_in_new_tab");

    context.link.should("have.attr", "target", "_blank");

    context.link.should("have.attr", "rel", "nofollow noreferrer");

    context.icon.should("be.visible");

    visualTest();
  });

  it("should render basic link opening in a new tab with custom rel", () => {
    visit("default_open_in_new_tab_with_rel");

    context.link.should("have.attr", "target", "_blank");

    context.link.should("have.attr", "rel", "noopener noreferrer");

    context.icon.should("be.visible");

    visualTest();
  });

  it("should render table variant link", () => {
    visit("table");

    visualTest();
  });

  it("should render inline variant link", () => {
    visit("inline");

    cy.get("#info-icon").trigger("mouseenter");

    visualTest();
  });

  it("should render disabled link", () => {
    visit("disabled");

    visualTest();
  });
});
