/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React, { useState } from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";

import { IconButton, IconButtonProps } from "../components/IconButton";

interface WrapperProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  type?: IconButtonProps["type"];
}

const Wrapper = ({ onSubmit, type }: WrapperProps) => {
  return (
    <form onSubmit={onSubmit}>
      <IconButton
        className="test-component"
        placement="bottom"
        name="cogs"
        type={type}
      >
        Some label
      </IconButton>
    </form>
  );
};

const DisabledWrapper = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <IconButton
        className="one"
        name="cogs"
        onClick={() => setDisabled(!disabled)}
        disabled={disabled}
      >
        First
      </IconButton>
      <IconButton
        className="two"
        name="cogs"
        onClick={() => setDisabled(!disabled)}
        disabled={!disabled}
      >
        Second
      </IconButton>
    </div>
  );
};

describe("IconButton", () => {
  it("should NOT submit form when clicked by default", () => {
    const submitStub = cy
      .stub()
      .as("submit")
      .callsFake((e) => e.preventDefault());

    mountWithTheme(<Wrapper onSubmit={submitStub} />);

    cy.get(".test-component").should("be.visible").click();

    cy.get("@submit").should("not.have.been.called");
  });

  it("should submit form when clicked with 'type=submit", () => {
    const submitStub = cy
      .stub()
      .as("submit")
      .callsFake((e) => e.preventDefault());

    mountWithTheme(<Wrapper onSubmit={submitStub} type="submit" />);

    cy.get(".test-component").should("be.visible").click();

    cy.get("@submit").should("have.been.calledOnce");
  });

  it("should remove tooltip when the button is disabled", () => {
    mountWithTheme(<DisabledWrapper />);

    // trigger the tooltip
    cy.get(".one").trigger("mouseenter");

    cy.findByText("First").should("be.visible");

    cy.findByText("Second").should("not.exist");

    // click to disable the first button and enable the second button
    cy.get(".one").click();

    // verify the tooltips are both gone
    cy.findByText("First").should("not.exist");

    cy.findByText("Second").should("not.exist");

    // trigger the tooltip on the other button
    cy.get(".two").trigger("mouseenter");

    cy.findByText("First").should("not.exist");

    cy.findByText("Second").should("be.visible");

    // click to disable the second button, and re-enable the first button
    cy.get(".two").click();

    cy.findByText("First").should("not.exist");

    cy.findByText("Second").should("not.exist");

    // do the same thing again to verify tooltips don't magically re-appear
    cy.get(".one").trigger("mouseenter");

    cy.findByText("First").should("be.visible");

    cy.findByText("Second").should("not.exist");

    cy.get(".one").click();

    cy.findByText("First").should("not.exist");

    cy.findByText("Second").should("not.exist");
  });
});
