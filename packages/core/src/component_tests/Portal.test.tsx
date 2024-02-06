/* eslint-disable jest/expect-expect */
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import React from "react";

import { Portal } from "../components/Portal";

describe("Portal", () => {
  it("should render without crashing", () => {
    mountWithTheme(<Portal node={undefined} />);
  });
});
