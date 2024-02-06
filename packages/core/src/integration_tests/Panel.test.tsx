/* eslint-disable jest/expect-expect */
import { makeContext, getStorybookControlsURL } from "@braze/cypress-utils";
import { panel, panelHeader, panelBody } from "@braze/beacon-test-utils";
import { setupVisualTesting, visualTest } from "@braze/beacon-cypress-helpers";

import { insetSizes } from "../components/PanelBody";

const story = getStorybookControlsURL("Core/Content Display/Panel");

describe("Panel", () => {
  const context = makeContext("Panel", {
    panel,
    panelHeader,
    panelBody,
  });

  setupVisualTesting("Panel");

  insetSizes.forEach((size) => {
    it(`should render Panel with inset size ${size}`, () => {
      cy.visit(
        story("basic use")([
          {
            name: "inset",
            type: "select",
            value: size,
          },
        ])()
      );

      visualTest();
    });
  });

  ["center", "left", "right"].forEach((alignment) => {
    it(`should render Panel with text alignment ${alignment}`, () => {
      cy.visit(
        story("text alignment")([
          {
            name: "textAlign",
            type: "select",
            value: alignment,
          },
        ])()
      );

      visualTest();
    });
  });

  it("should render no header", () => {
    cy.visit(story("no header")()());

    context.panel.in((panel) => {
      panel.header.should("not.exist");

      panel.body.should("have.text", "Hello world!");
    });

    visualTest();
  });

  it("should render stacked panels", () => {
    cy.visit(story("stacking")()());

    context.panel.should("have.length", 3);

    context.panelHeader.eq(0).should("have.text", "This is a panel");

    context.panelHeader.eq(1).should("have.text", "This is another panel");

    context.panelBody.eq(0).should("have.text", "Hello world!");

    context.panelBody.eq(2).should("have.text", "Hello world again!");

    visualTest();
  });

  it("should render light background", () => {
    cy.visit(story("light background")()());

    visualTest();
  });

  it("should render light background with form elements", () => {
    cy.visit(story("light background with form elements")()());

    visualTest();
  });
});
