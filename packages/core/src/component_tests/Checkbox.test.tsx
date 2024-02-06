/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { checkbox } from "@braze/beacon-test-utils";
import faker from "@faker-js/faker";

import { Checkbox } from "../components/Checkbox";

const context = makeContext("Checkbox", {
  checkbox,
});

describe("Checkbox", () => {
  let props;

  beforeEach(() => {
    props = {
      id: faker.random.word(),
      onChange: cy.stub(),
    };
  });

  it("should not crash following a click events when disabled is false", () => {
    mountWithTheme(<Checkbox {...props} onChange={undefined} />);

    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox.click().should(($checkbox) => {
        expect($checkbox).to.exist;
      });
    });
  });

  it("should NOT respond to click events when disabled is true", () => {
    mountWithTheme(<Checkbox {...props} disabled />);

    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox.click().then(() => {
        expect(props.onChange).not.to.have.been.called;
      });
    });
  });

  it("should NOT respond to key press events that contain key !== ' ' when disabled is false", () => {
    mountWithTheme(<Checkbox {...props} />);

    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox
        .focus()
        .type("a")
        .then(() => {
          expect(props.onChange).not.to.be.called;
        });
    });
  });

  it("should NOT respond to key press events disabled is true", () => {
    mountWithTheme(<Checkbox {...props} disabled />);

    context.checkbox.in((checkbox) => {
      checkbox.styledCheckbox
        .type(" ")
        .type("a")
        .then(() => {
          expect(props.onChange).not.to.have.been.called;
        });
    });
  });
});
