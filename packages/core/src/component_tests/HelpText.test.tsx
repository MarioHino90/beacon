/* eslint-disable jest/expect-expect */
import React from "react";
import { makeContext } from "@braze/cypress-utils";
import { helpText } from "@braze/beacon-test-utils";
import {
  mountWithTheme,
  setupVisualTesting,
  visualTest,
} from "@braze/beacon-cypress-helpers";
import faker from "@faker-js/faker";

import { HelpText } from "../components/HelpText";

faker.seed(20211220);

const context = makeContext("HelpText", { helpText });

describe("HelpText", () => {
  setupVisualTesting("HelpText");

  it("should display correctly as a help text", () => {
    const children = faker.random.words(5);

    mountWithTheme(<HelpText>{children}</HelpText>);

    context.helpText.should("be.visible").should("have.text", children);

    visualTest();
  });

  it("should display correctly as a disabled help text", () => {
    const children = faker.random.words(5);

    mountWithTheme(<HelpText disabled>{children}</HelpText>);

    context.helpText.should("be.visible").should("have.text", children);

    visualTest();
  });
});
