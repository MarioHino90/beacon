/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React, { useRef, useState } from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { numberInput } from "@braze/beacon-test-utils";

import { Button } from "../components/Button";
import { NumberInput } from "../components/NumberInput";

const context = makeContext("NumberInput", {
  numberInput,
  button: () => cy.get(".kill-ref"),
});

const Wrapper = ({ containerClassname }: { containerClassname?: string }) => {
  const ref = useRef(null);
  const [value, setValue] = useState("0");

  return (
    <>
      <div>
        <NumberInput
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          containerClassName={containerClassname}
        />
      </div>
      <div>
        <Button
          className="kill-ref"
          variant="primary"
          onClick={() => {
            ref.current = null;
          }}
        >
          Set ref to null
        </Button>
      </div>
    </>
  );
};

describe("NumberInput", () => {
  it("should not change the value on up button click if the ref is falsy", () => {
    // mount the wrapper
    mountWithTheme(<Wrapper />);

    // reset refs to falsy
    context.button.click();

    // click the up button in the number input
    context.numberInput.in((numberInput) => {
      // assert that the value is 0
      numberInput.input.should("have.value", 0);

      // click the up button
      numberInput.upButton.click();

      // assert that the value is still 0
      numberInput.input.should("have.value", 0);
    });
  });

  it("should not change the value on down button click if the ref is falsy", () => {
    // mount the wrapper
    mountWithTheme(<Wrapper />);

    // reset refs to falsy
    context.button.click();

    // click the up button in the number input
    context.numberInput.in((numberInput) => {
      // assert that the value is 0
      numberInput.input.should("have.value", 0);

      // click the up button
      numberInput.downButton.click();

      // assert that the value is still 0
      numberInput.input.should("have.value", 0);
    });
  });

  it("should set the classname when containerClassName is passed in", () => {
    mountWithTheme(<Wrapper containerClassname="foo" />);

    context.numberInput.should("have.class", "foo");
  });
});
