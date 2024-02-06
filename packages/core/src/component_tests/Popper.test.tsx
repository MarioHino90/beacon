/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React, { useState } from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";

import { Popper, PopperProps } from "../components/Popper";
import { Button, usePopper } from "..";
import { PopperContextProvider } from "../components/Popper/PopperContext";
import { useScrollListener } from "../components/Popper/useScrollListener";

const doNothing = () => {
  // do nothing
};

const defaultProps: PopperProps = {
  onOpen: doNothing,
  onClose: doNothing,
};

const Wrapper = (props: Partial<PopperProps>) => {
  return <Popper {...{ ...defaultProps, ...props }} />;
};

const UnmountDelayWrapper = ({
  delay,
}: Required<Pick<PopperProps, "delay">>) => {
  const [mounted, setMounted] = useState(true);
  const [props, targetRef] = usePopper<HTMLButtonElement>();

  if (!mounted) {
    return <>unmounted</>;
  }

  return (
    <div>
      <Button variant="primary" onClick={() => setMounted(false)}>
        unmount
      </Button>
      <Button variant="primary" type="button" ref={targetRef}>
        open popper
      </Button>
      <input type="text" placeholder="blur the button" />
      <Popper {...props} delay={delay} targetRef={targetRef}>
        hi
      </Popper>
    </div>
  );
};

const RemoveOnDisabled = () => {
  const [disabled, setDisabled] = useState(false);
  const [props, targetRef] = usePopper<HTMLButtonElement>(
    undefined,
    false,
    disabled
  );

  return (
    <div>
      <Button variant="primary" onClick={() => setDisabled(!disabled)}>
        {disabled ? "Enable" : "Disable"}
      </Button>
      <Button
        variant="primary"
        type="button"
        ref={targetRef}
        disabled={disabled}
      >
        open popper
      </Button>
      <Popper {...props} targetRef={targetRef}>
        In the popper
      </Popper>
    </div>
  );
};

const ScrollWrapper = () => {
  useScrollListener(doNothing);

  return (
    <div style={{ height: 6000, width: "100vw" }}>
      <Popper {...defaultProps} />
    </div>
  );
};

describe("Popper", () => {
  it("should error when no target or targetRef is passed in outside production", () => {
    cy.spy(console, "error").as("console.error");

    mountWithTheme(<Wrapper>hi</Wrapper>);

    cy.get("@console.error").should(
      "have.been.calledWith",
      "ERROR: You must specify a 'target' or 'targetRef' prop for the 'Popper' component."
    );
  });

  it("should not error when unmounted while a delayed close timer is active", () => {
    cy.clock();

    cy.spy(console, "error").as("console.error");

    mountWithTheme(<UnmountDelayWrapper delay={[null, 2000]} />);

    cy.findByText("open popper").click();

    cy.findByText("unmount").click();

    cy.findByText("unmounted").should("be.visible");

    cy.tick(2500);

    cy.get("@console.error").should("not.have.been.called");
  });

  it("should not error when unmounted before a delayed open is triggered", () => {
    cy.clock();

    cy.spy(console, "error").as("console.error");

    mountWithTheme(<UnmountDelayWrapper delay={[2000, null]} />);

    cy.findByText("open popper").click();

    cy.findByText("unmount").click();

    cy.findByText("unmounted").should("be.visible");

    cy.tick(2500);

    cy.get("@console.error").should("not.have.been.called");
  });

  it("should successfully ignore scroll events when the popper is closed", () => {
    mountWithTheme(
      <PopperContextProvider {...defaultProps} isOpen={false}>
        <ScrollWrapper />
      </PopperContextProvider>
    );

    cy.scrollTo(0, 3000);
  });

  it("should remove an open popper when its target becomes disabled", () => {
    mountWithTheme(<RemoveOnDisabled />);

    cy.findByText("In the popper").should("not.exist");

    cy.findByText("open popper").click();

    cy.findByText("In the popper").should("be.visible");

    cy.findByText("Disable").click();

    cy.findByText("In the popper").should("not.exist");

    cy.findByText("Enable").click();

    cy.findByText("In the popper").should("not.exist");
  });
});
