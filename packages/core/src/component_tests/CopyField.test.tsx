/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { copyField } from "@braze/beacon-test-utils";

import { CopyField } from "../components/CopyField";
import { FieldLabel } from "../components/FieldLabel";

const context = makeContext("CopyField", copyField);

const Wrapper = ({ showTextInButton, zIndex }: any) => {
  return (
    <FieldLabel label="Label" helpText="Some help text">
      <CopyField
        value="4ba9f231-d578-4663-ae43-4cffa08d9a9d"
        showTextInButton={showTextInButton}
        zIndex={zIndex}
      />
    </FieldLabel>
  );
};

describe("CopyField", () => {
  it("should not crash when zIndex and 'showTextInButton' are not explicitly defined", () => {
    mountWithTheme(<Wrapper />);

    context.copyField.should("be.visible");
  });
});
