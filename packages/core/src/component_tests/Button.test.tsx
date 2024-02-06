/* eslint-disable jest/expect-expect */

import React from "react";
import {
  mountWithTheme,
  setupVisualTesting,
  visualTest,
} from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { button } from "@braze/beacon-test-utils";

import { Button } from "../components/Button";

const context = makeContext("Button", {
  button,
});

describe("Button", () => {
  setupVisualTesting("Button");

  it("should render a small loading button correctly", () => {
    mountWithTheme(
      <Button loadingState="loading" loadingMessage="Loading..." size="sm" />
    );

    context.button.should("be.visible");

    visualTest();
  });

  it("should render a secondary loading button correctly", () => {
    mountWithTheme(
      <Button
        variant="secondary"
        loadingState="loading"
        loadingMessage="Loading..."
      />
    );

    context.button.should("be.visible");

    visualTest();
  });

  it("should render a tertiary loading button correctly", () => {
    mountWithTheme(
      <Button
        variant="tertiary"
        loadingState="loading"
        loadingMessage="Loading..."
      />
    );

    context.button.should("be.visible");

    visualTest();
  });

  it("should render a quaternary loading button correctly", () => {
    mountWithTheme(
      <Button
        variant="quaternary"
        loadingState="loading"
        loadingMessage="Loading..."
      />
    );

    context.button.should("be.visible");

    visualTest();
  });

  it("should render a muted loading button correctly", () => {
    mountWithTheme(
      <Button
        intent="muted"
        loadingState="loading"
        loadingMessage="Loading..."
      />
    );

    context.button.should("be.visible");

    visualTest();
  });
});
