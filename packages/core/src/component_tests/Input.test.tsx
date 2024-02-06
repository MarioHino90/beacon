/* eslint-disable jest/expect-expect */
/**
 * @fileoverview the component tests here are
 * mainly to ensure that the various edge cases
 * of Input that may not be worth specifically
 * calling out in Storybook are tested
 */

import React from "react";
import {
  mountWithTheme,
  setupVisualTesting,
  visualTest,
} from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { input } from "@braze/beacon-test-utils";

import { Input } from "../components/Input";
import { InputGroupContextProvider } from "../components/InputGroupContext";

const context = makeContext("Input", { input });

describe("Input", () => {
  setupVisualTesting("Input");

  it("should render correctly with placeholder", () => {
    mountWithTheme(<Input />);

    context.input.should("be.visible");

    visualTest();
  });

  it("should render empty value correctly", () => {
    mountWithTheme(<Input value="" />);

    context.input.should("be.visible");
  });

  it("should render correctly as a text input", () => {
    mountWithTheme(<Input type="text" />);

    context.input.should("be.visible");
  });

  it("should render correctly as a password input", () => {
    mountWithTheme(<Input type="password" />);

    context.input.should("be.visible").type("something");

    visualTest();
  });

  it("should render correctly within an 'InputGroupContext' that is disabled and not be editable", () => {
    mountWithTheme(
      <InputGroupContextProvider disabled>
        <Input />
      </InputGroupContextProvider>
    );

    context.input.should("be.visible").should("be.disabled");

    visualTest();
  });

  it("should render correctly within an 'InputGroupContext' that is invalid", () => {
    mountWithTheme(
      <InputGroupContextProvider invalid>
        <Input />
      </InputGroupContextProvider>
    );

    context.input.should("be.visible").type("something");

    visualTest();
  });

  it("should render correctly within an 'InputGroupContext' that is disabled & invalid and not be editable", () => {
    mountWithTheme(
      <InputGroupContextProvider disabled invalid>
        <Input />
      </InputGroupContextProvider>
    );

    context.input.should("be.visible").should("be.disabled");

    visualTest();
  });

  it("should render correctly within an 'InputGroupContext' that is full width", () => {
    mountWithTheme(
      <InputGroupContextProvider fullWidth>
        <Input />
      </InputGroupContextProvider>
    );

    context.input.should("be.visible").type("something else");

    visualTest();
  });
});
