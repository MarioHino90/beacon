/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { box } from "@braze/beacon-test-utils";

import { Box, BoxProps } from "../components/Box";

const context = makeContext("BannerAlert", {
  box,
});

const Wrapper = (props: Partial<BoxProps>) => {
  return <Box {...props}>Title</Box>;
};

function spyOnConsoleWarn() {
  cy.window().then((win) => {
    cy.wrap(cy.spy(win.console, "warn")).as("console.warn");
  });
}

describe("Box", () => {
  it("should add class name to the box", () => {
    // mount the wrapper
    mountWithTheme(<Wrapper className="hi" />);

    context.box.should("have.class", "hi");
  });

  it("should call console.warn() with 'WARNING' if the 'style' prop includes display: flex", () => {
    spyOnConsoleWarn();

    mountWithTheme(<Wrapper style={{ display: "flex", color: "black" }} />);

    cy.get("@console.warn").should("have.been.calledOnce");

    cy.get("@console.warn").should("have.been.calledWithMatch", /WARNING/);
  });

  it("should call console.warn() with 'WARNING' if the 'style' prop includes display: inline-flex", () => {
    spyOnConsoleWarn();

    mountWithTheme(
      <Wrapper style={{ display: "inline-flex", color: "black" }} />
    );

    cy.get("@console.warn").should("have.been.calledOnce");

    cy.get("@console.warn").should("have.been.calledWithMatch", /WARNING/);
  });

  it("should NOT produce a 'console.warn' message if 'style' prop does NOT include 'display: flex;'", () => {
    spyOnConsoleWarn();

    mountWithTheme(
      <Wrapper style={{ display: "inline-block", color: "black" }} />
    );

    cy.get("@console.warn").should("not.have.been.called");
  });

  it("should NOT produce a 'console.warn' message if 'style' prop is not passed", () => {
    spyOnConsoleWarn();

    mountWithTheme(<Wrapper />);

    cy.get("@console.warn").should("not.have.been.called");
  });
});
