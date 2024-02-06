/* eslint-disable jest/expect-expect */
import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";

import { LevelsContextProvider, useLevelsContext } from "..";

const ShowsLevel = ({
  children,
  id = "level",
}: {
  children?: React.ReactNode;
  id?: string;
}) => {
  const content = useLevelsContext(100, 100);

  return (
    <span id={id}>
      {content}
      {children}
    </span>
  );
};

describe("LevelsContextProvider", () => {
  it("should render with correct level when there is no prior context", () => {
    mountWithTheme(<ShowsLevel />);

    cy.get("#level").should("have.text", "200");
  });

  it("should render with correct level with a prior context", () => {
    mountWithTheme(
      <LevelsContextProvider step={12} base={305}>
        <ShowsLevel />
      </LevelsContextProvider>
    );

    cy.get("#level").should("have.text", "417");
  });

  it("should render with correct level with 2 prior contexts", () => {
    mountWithTheme(
      <LevelsContextProvider step={12} base={305}>
        <ShowsLevel>
          <LevelsContextProvider step={12} base={305}>
            <ShowsLevel id="sublevel" />
          </LevelsContextProvider>
        </ShowsLevel>
      </LevelsContextProvider>
    );

    cy.get("#level").should("have.text", "417429");

    cy.get("#sublevel").should("have.text", "429");
  });
});
