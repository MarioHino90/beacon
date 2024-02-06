/* eslint-disable jest/expect-expect */

import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { brazeIcon } from "@braze/beacon-test-utils";
import faker from "@faker-js/faker";

import { BrazeIcon } from "../components/BrazeIcon";

const context = makeContext("BrazeIcon", {
  brazeIcon,
});

describe("BrazeIcon", () => {
  it("should not render anything when 'name' is not valid", () => {
    mountWithTheme(<BrazeIcon name={faker.random.word() as any} />);

    context.brazeIcon.should("not.exist");
  });

  it("should not render anything when 'name' is not defined", () => {
    mountWithTheme(<BrazeIcon />);

    context.brazeIcon.should("not.exist");
  });
});
