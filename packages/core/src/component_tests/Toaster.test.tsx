/* eslint-disable jest/valid-expect-in-promise */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/expect-expect */

import React from "react";
import { makeContext } from "@braze/cypress-utils";
import { toast, toaster } from "@braze/beacon-test-utils";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import faker from "@faker-js/faker";

import { Toaster, makeToast } from "../components/Toaster";

faker.seed(20211220);

const context = makeContext("Toaster", { toast, toaster });

describe("Toaster", () => {
  it("should display correctly as a help text", () => {
    mountWithTheme(<Toaster id="toaster-1" autoClose={false} />);

    // create a stub function
    const onToastClickStub = cy.stub();

    // make an 'info' toast
    makeToast("info", "Test message", {
      onClick: onToastClickStub,
      containerId: "toaster-1",
    });

    // assert that the toaster is visible
    context.toaster.should("be.visible");

    // assert that there is only one toast inside
    context.toaster.in((toaster) => {
      toaster.toast.should("have.length", 1);
    });

    // grab the toast and click/assert
    context.toast
      .eq(0)
      // click onto the toast
      .click()
      // assert that the stub is called
      .then(() => {
        expect(onToastClickStub).to.be.called;
      });
  });
});
