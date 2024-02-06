/* eslint-disable jest/expect-expect */
/* eslint-disable jest/valid-expect */
/* eslint-disable jest/valid-expect-in-promise */

import React, { useState } from "react";
import { mountWithTheme } from "@braze/beacon-cypress-helpers";
import { makeContext } from "@braze/cypress-utils";
import { inlineInput } from "@braze/beacon-test-utils";

import { InlineInput, InlineInputProps } from "../components/InlineInput";

const context = makeContext("InlineInput", {
  ...inlineInput,
});

const Wrapper = ({ onChange, ...props }: InlineInputProps) => {
  const [value, setValue] = useState("");

  const handleChange = (event, action) => {
    onChange?.(event, action);

    setValue(event.target.value);
  };

  return <InlineInput {...props} value={value} onChange={handleChange} />;
};

describe("InlineInput", () => {
  it("should display values and behave as intended", () => {
    // mount the wrapper
    mountWithTheme(<Wrapper placeholder="Type something here" />);

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode and save
    context.editMode.actions.type("Hello, there{enter}");
  });

  it("should call 'onChange' with a second parameter as 'change' when user types a character that is not {enter} or {esc}", () => {
    const onChangeMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper placeholder="Type something here" onChange={onChangeMock} />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // text to type
    const text = "Hello, there";

    // type into edit mode
    context.editMode.actions.type(text, () => {
      // check that on change was called for each keystroke
      expect(onChangeMock.getCalls().length).equals(text.length);

      // also check that the second argument for each onChange call was 'change'
      onChangeMock.getCalls().forEach((call) => {
        expect(call.args[1]).equals("change");
      });
    });
  });

  it("should call 'onChange' with a second parameter as 'save' when user presses {enter}", () => {
    const onChangeMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper placeholder="Type something here" onChange={onChangeMock} />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode and save
    context.editMode.actions.type("Hello, there{enter}", () => {
      // check that the second argument for each onChange call was 'save'
      expect(onChangeMock.lastCall.args[1]).equals("save");
    });
  });

  it("should call 'onSaveClick'  when user presses {enter}", () => {
    const onSaveClickMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper
        placeholder="Type something here"
        onSaveClick={onSaveClickMock}
      />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode and save
    context.editMode.actions.type("Hello, there{enter}", () => {
      // check that onSaveClick was called
      expect(onSaveClickMock).to.be.calledOnce;
    });
  });

  it("should call 'onChange' with a second parameter as 'cancel' when user presses {esc}", () => {
    const onChangeMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper placeholder="Type something here" onChange={onChangeMock} />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode and cancel
    context.editMode.actions.type("Hello, there{esc}", () => {
      // check that the second argument for each onChange call was 'cancel'
      expect(onChangeMock.lastCall.args[1]).equals("cancel");
    });
  });

  it("should call 'onCancelClick' when user presses {esc}", () => {
    const onCancelClickMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper
        placeholder="Type something here"
        onCancelClick={onCancelClickMock}
      />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode and cancel
    context.editMode.actions.type("Hello, there{esc}", () => {
      // check that onCancelClick was called
      expect(onCancelClickMock).to.be.calledOnce;
    });
  });

  it("should call 'onChange' with a second parameter as 'save' when user clicks on save button", () => {
    const onChangeMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper placeholder="Type something here" onChange={onChangeMock} />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode
    context.editMode.actions.type("Hello, there");

    // hit save button
    context.editMode.actions.saveClick(() => {
      // check that the second argument for each onChange call was 'save'
      expect(onChangeMock.lastCall.args[1]).equals("save");
    });
  });

  it("should call 'onSaveClick' when user clicks on save button", () => {
    const onSaveClickMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper
        placeholder="Type something here"
        onSaveClick={onSaveClickMock}
      />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode
    context.editMode.actions.type("Hello, there");

    // hit save button
    context.editMode.actions.saveClick(() => {
      // check that onSaveClick was called
      expect(onSaveClickMock).to.be.calledOnce;
    });
  });

  it("should call 'onChange' with a second parameter as 'cancel' when user clicks on cancel button", () => {
    const onChangeMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper placeholder="Type something here" onChange={onChangeMock} />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode
    context.editMode.actions.type("Hello, there");

    // hit cancel button
    context.editMode.actions.cancelClick(() => {
      // check that the second argument for each onChange call was 'cancel'
      expect(onChangeMock.lastCall.args[1]).equals("cancel");
    });
  });

  it("should call 'onCancelClick' when user clicks on cancel button", () => {
    const onCancelClickMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper
        placeholder="Type something here"
        onCancelClick={onCancelClickMock}
      />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode
    context.editMode.actions.type("Hello, there");

    // hit cancel button
    context.editMode.actions.cancelClick(() => {
      // check that onCancelClick was called
      expect(onCancelClickMock).to.be.calledOnce;
    });
  });

  it("should call 'onChange' with a second parameter as 'clear' when user clicks on clear button", () => {
    const onChangeMock = cy.stub();

    // mount the wrapper
    mountWithTheme(
      <Wrapper placeholder="Type something here" onChange={onChangeMock} />
    );

    // click into view mode to switch to edit mode
    context.viewMode.actions.clickValue();

    // type into edit mode
    context.editMode.actions.type("Hello, there");

    // hit clear button
    context.editMode.actions.clearClick(() => {
      // check that the second argument for each onChange call was 'clear'
      expect(onChangeMock.lastCall.args[1]).equals("clear");
    });
  });
});
