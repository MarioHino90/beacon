/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

/**
 * @fileoverview the component tests here are to
 * primarily ensure that 'InputGroupAddon' appears
 * correctly, since it's not particularly valuable
 * to add separate Storybook stories
 */

import React from "react";
import {
  mountWithTheme,
  setupVisualTesting,
  visualTest,
} from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { inputGroupAddon } from "@braze/beacon-test-utils";

import { Input } from "../components/Input";
import { InputGroup, InputGroupProps } from "../components/InputGroup";
import { InputGroupAddon } from "../components/InputGroupAddon";

const context = makeContext("InlineInput", { inputGroupAddon });

const Wrapper = (props: InputGroupProps) => {
  return (
    <InputGroup {...props}>
      <Input value="hello, there" />
      <InputGroupAddon>$</InputGroupAddon>
    </InputGroup>
  );
};

describe("InputGroupAddon", () => {
  setupVisualTesting("InputGroupAddon");

  it("should render correctly when 'InputGroupContext' disabled", () => {
    mountWithTheme(<Wrapper disabled />);

    context.inputGroupAddon.should("be.visible");

    visualTest();
  });

  it("should render correctly when 'InputGroupContext' invalid", () => {
    mountWithTheme(<Wrapper invalid />);

    context.inputGroupAddon.should("be.visible");

    visualTest();
  });

  it("should render correctly when 'InputGroupContext' disabled and invalid", () => {
    mountWithTheme(<Wrapper disabled invalid />);

    context.inputGroupAddon.should("be.visible");

    visualTest();
  });

  it("should render correctly when 'InputGroupContext' fullWidth", () => {
    mountWithTheme(<Wrapper fullWidth />);

    context.inputGroupAddon.should("be.visible");

    visualTest();
  });
});
