/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";

import { Annotation } from "../components/Annotation";
import { Button } from "../components/Button";

const Wrapper = () => {
  return (
    <Annotation
      className="test-component"
      label="...with a tooltip"
      placement="bottom"
    >
      <Button>This button is annotated</Button>
    </Annotation>
  );
};

describe("Annotation", () => {
  it("should render correctly when variant is not defined explicitly", () => {
    mountWithTheme(<Wrapper />);

    cy.get(".test-component").should("be.visible");
  });
});
