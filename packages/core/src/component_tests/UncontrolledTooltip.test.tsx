/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */

import React from "react";
import { css } from "styled-components";
import { makeContext } from "@braze/cypress-utils";
import {
  mountWithTheme,
  setupVisualTesting,
  visualTest,
} from "@braze/beacon-cypress-helpers";
import { tooltip } from "@braze/beacon-test-utils";

import {
  UncontrolledTooltip,
  UncontrolledTooltipProps,
} from "../components/UncontrolledTooltip";

const context = makeContext("Tooltip", { tooltip });

const Wrapper = (props: Partial<UncontrolledTooltipProps>) => {
  return (
    <UncontrolledTooltip {...props} label="Hello, there">
      <button className="focus-el">focus on me!</button>
    </UncontrolledTooltip>
  );
};

describe("UncontrolledTooltip", () => {
  setupVisualTesting("UncontrolledTooltip");

  it("should throw an error when used with multiple children", () => {
    expect(() =>
      mountWithTheme(
        <UncontrolledTooltip
          triggers={["click"]}
          untriggers={["click"]}
          placement="bottom"
          label="Tooltip"
        >
          <button>Click to open/close</button>
          <div>I should not be here</div>
        </UncontrolledTooltip>
      )
    ).to.throw;
  });

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
