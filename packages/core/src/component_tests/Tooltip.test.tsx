/* eslint-disable jest/expect-expect */
import React from "react";
import { css } from "styled-components";
import { makeContext } from "@braze/cypress-utils";
import { tooltip } from "@braze/beacon-test-utils";
import {
  mountWithTheme,
  setupVisualTesting,
  visualTest,
} from "@braze/beacon-cypress-helpers";

import { Tooltip, TooltipProps, useTooltip } from "../components/Tooltip";

const context = makeContext("Tooltip", { tooltip });

const Wrapper = (props: Partial<TooltipProps>) => {
  const [tooltipState, ref] = useTooltip<HTMLButtonElement>();

  return (
    <>
      <button className="focus-el" ref={ref}>
        focus on me!
      </button>
      <Tooltip targetRef={ref} {...props} {...tooltipState}>
        Hello, there
      </Tooltip>
    </>
  );
};

describe("Tooltip", () => {
  setupVisualTesting("Tooltip");

  it("should display correctly when styledCss is defined", () => {
    // create a styled-components css object
    const testCss = css`
      background-color: orange;
    `;

    // mount wrapper
    mountWithTheme(<Wrapper styledCss={testCss} />);

    // focus on target
    cy.get(".focus-el").click();

    // assert that the tooltip is visible
    context.tooltip.should("be.visible");

    // take a snapshot
    visualTest();
  });
});
