/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";

import { TableHeaderCell } from "../components/TableHeaderCell";

interface WrapperProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
}

const Wrapper = ({ onSubmit }: WrapperProps) => {
  return (
    <form onSubmit={onSubmit}>
      <TableHeaderCell className="test-component">Some label</TableHeaderCell>
    </form>
  );
};

describe("TableHeaderCell", () => {
  it("should NOT submit form when clicked by default", () => {
    const submitStub = cy
      .stub()
      .as("submit")
      .callsFake((e) => e.preventDefault());

    mountWithTheme(<Wrapper onSubmit={submitStub} />);

    cy.get(".test-component").should("be.visible").click();

    cy.get("@submit").should("not.have.been.called");
  });
});
