import React, { useCallback, useEffect, useReducer, useRef } from "react";

import {
  InlineInputState,
  Actions,
  InlineInputProps,
  OnChangeAction,
} from "./types";
import { InlineInputEditMode } from "./InlineInputEditMode";
import { InlineInputViewMode } from "./InlineInputViewMode";

export const initialState: InlineInputState = {
  isEditing: false,
  prevValue: "",
  transitionState: "waiting",
};

export const reducer = (
  state: InlineInputState,
  action: Actions
): InlineInputState => {
  switch (action.type) {
    case "SET_EDIT_MODE":
      return { ...state, isEditing: action.value };
    case "SET_PREV_VALUE":
      return { ...state, prevValue: action.value };
    case "SAVE_ACTION":
      return {
        ...state,
        prevValue: action.value,
        isEditing: false,
      };
    case "CANCEL_ACTION":
      return { ...state, transitionState: "canceling" };
    case "CANCEL_COMPLETE_ACTION":
      return { ...state, transitionState: "waiting", isEditing: false };
    case "CLEAR_ACTION":
      return { ...state, transitionState: "clearing" };
    case "CLEAR_COMPLETE_ACTION":
      return { ...state, transitionState: "waiting" };
    default:
      return state;
  }
};

export const InlineInput = ({
  children,
  disabled,
  invalid,
  onChange,
  onSaveClick,
  onCancelClick,
  onClearClick,
  placeholder,
  vSize = "md",
  value,
  ...props
}: InlineInputProps): React.ReactElement => {
  // create refs for focus and synthetic event generation
  const inputRef = useRef<HTMLInputElement>(null);
  const saveButtonRef = useRef<HTMLButtonElement>(null);
  const cancelButtonRef = useRef<HTMLButtonElement>(null);

  // create internal state
  const [{ isEditing, prevValue, transitionState }, dispatch] = useReducer(
    reducer,
    initialState
  );

  /**
   * function that synthetically invokes a DOM change event
   * that can be used by `onChange` handlers using the standard
   * 'event' pattern
   *
   * The core reason this function exists is to avoid having to
   * create an `onChange` function that is called by just the
   * current 'value' parameter. This desire is supported by the
   * following points:
   * - Calling `onChange` with just the new value is inconsistent
   *   behavior with all other input fields, similar to how `Select`
   *   works and potentially a cause of headaches/confusion in practice
   * - A component that calls `onChange` with just the updated value
   *   does not integrate as nicely with Formik since the latter relies
   *   on other information in the event object (e.g. `name` to
   *   determine which field in state the input maps to) and requires
   *   workarounds like using setFieldValue, which is suboptimal imo
   */
  const makeSyntheticChangeEvent = useCallback(
    (action: OnChangeAction) => {
      const { current: input } = inputRef;

      // if input is not defined, then stop
      if (!input) {
        return;
      }

      // create synthetic input event
      const inputEvent = new Event("input", { bubbles: true });

      // dispatch synthetic event using current controlled value of the input field
      input.dispatchEvent(inputEvent);

      // fire the onChange prop, if it exists
      // TODO: not a fan of going through 'unknown',
      // there might be better way to do this
      onChange?.(
        inputEvent as unknown as React.ChangeEvent<HTMLInputElement>,
        action
      );
    },
    [onChange]
  );

  /**
   * function that synthetically invokes a DOM click event
   * that can be used by `click` handlers using the standard
   * 'event' pattern
   *
   * We want to create these events in the cases where keyboard
   * shortcuts simulate the actions of clicking buttons
   */
  const makeSyntheticClickEvent = useCallback(
    (button: HTMLButtonElement | null) => {
      // if input is not defined, then stop
      if (!button) {
        return;
      }

      // create synthetic click event
      const clickEvent = new Event("click", { bubbles: true });

      // dispatch synthetic event using the given button
      button.dispatchEvent(clickEvent);
    },
    []
  );

  /**
   * on clear click, reset tempValue to empty string
   */
  const handleClear = useCallback(
    (event: React.MouseEvent) => {
      // call 'onClearClick' prop if defined
      onClearClick?.(event);

      // update state to indicate that the clear action has been invoked
      dispatch({ type: "CLEAR_ACTION" });

      // focus user back into the input field
      inputRef.current?.focus();
    },
    [onClearClick]
  );

  /**
   * on enable editing click, set isEditing to true and
   * set tempValue equal to user supplied value, if appl.
   */
  const handleClickToEdit = useCallback(() => {
    // if component is disabled, then bail
    if (disabled) {
      return;
    }

    // update the state to enable editing
    dispatch({ type: "SET_EDIT_MODE", value: true });
  }, [disabled]);

  /**
   * on enable editing key event, set isEditing to true
   * and set tempValue equal to user supplies value, if appl.
   * ONLY applies to "space" or "enter" keys
   */
  const handleKeyDownToEdit = useCallback((event: React.KeyboardEvent) => {
    // if key is not space or enter, then abort
    if (
      event.key !== " " &&
      event.key !== "Enter" &&
      event.keyCode !== 32 &&
      event.keyCode !== 13
    ) {
      return;
    }

    // prevent default so we don't get undesired space in the input field via propagation
    event.preventDefault();

    // enable edit mode
    dispatch({ type: "SET_EDIT_MODE", value: true });
  }, []);

  /**
   * handle cancel click
   */
  const handleCancelClick = useCallback(
    (event: React.MouseEvent) => {
      // attempt to call 'onCancelClick' with the event
      onCancelClick?.(event);

      // update state to indicate that the cancel action has been invoked
      dispatch({ type: "CANCEL_ACTION" });
    },
    [onCancelClick]
  );

  /**
   * Create and fire a synthetic change event when user clicks
   * on save and call onChange with that event to update state
   */
  const handleSaveClick = useCallback(
    (event: React.MouseEvent) => {
      // fire a synthetic change event with "save" action
      makeSyntheticChangeEvent("save");

      // attempt to call 'onSaveClick' with the event
      onSaveClick?.(event);

      // update state with a new 'value' prop as our baseline
      dispatch({ type: "SAVE_ACTION", value });
    },
    [makeSyntheticChangeEvent, onSaveClick, value]
  );

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      // if invalid, then bail
      if (invalid) {
        return;
      }

      if (event.key === "Enter") {
        // fire a synthetic save click event
        makeSyntheticClickEvent(saveButtonRef.current);
      }

      if (event.key === "Escape") {
        // fire a synthetic cancel click event
        makeSyntheticClickEvent(cancelButtonRef.current);
      }
    },
    [invalid, makeSyntheticClickEvent]
  );

  /**
   * when switched into edit mode, focus on input box
   */
  useEffect(() => {
    if (isEditing) {
      inputRef.current?.focus();
    }
  }, [isEditing]);

  /**
   * when 'disabled' prop is changed to be true,
   * then automatically switch to view mode
   */
  useEffect(() => {
    if (disabled) {
      dispatch({ type: "SET_EDIT_MODE", value: false });
    }
  }, [disabled]);

  /**
   * when 'invalid' prop is changed to true,
   * then automatically switch to edit mode UNLESS disabled
   */
  useEffect(() => {
    // if component is disabled, then bail
    if (disabled) {
      return;
    }

    // otherwise, if component is invalid, switch to edit mode
    // since we should allow user to simply move on
    if (invalid && !isEditing) {
      dispatch({ type: "SET_EDIT_MODE", value: true });
    }
  }, [invalid, disabled, isEditing]);

  /**
   * when switching into edit mode, set 'prevValue' to equal prop 'value'
   *
   * NOTE: do NOT include 'value' since we don't want to update 'prevValue'
   * every time 'value' changes
   */
  useEffect(() => {
    if (isEditing) {
      dispatch({ type: "SET_PREV_VALUE", value });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEditing]);

  /**
   * when 'isCanceling' is true, make synthetic change event using
   * 'prevValue' as input field value
   */
  useEffect(() => {
    if (transitionState === "canceling") {
      // if component is canceling the input change, then
      // make a synthetic change event
      makeSyntheticChangeEvent("cancel");

      // update state to complete cancel action
      dispatch({ type: "CANCEL_COMPLETE_ACTION" });
    }
  }, [transitionState, makeSyntheticChangeEvent]);

  /**
   * when 'isClearing' is true, make synthetic change event using
   * an empty string as input field value
   */
  useEffect(() => {
    if (transitionState === "clearing") {
      // if component is clearing the input, then
      // make a synthetic change event
      makeSyntheticChangeEvent("clear");

      // update state to complete clear action
      dispatch({ type: "CLEAR_COMPLETE_ACTION" });
    }
  }, [transitionState, makeSyntheticChangeEvent]);

  if (!isEditing && !invalid) {
    return (
      <InlineInputViewMode
        disabled={disabled}
        onClick={handleClickToEdit}
        onKeyDownCapture={handleKeyDownToEdit}
        placeholder={placeholder}
        vSize={vSize}
        value={value}
      >
        {children}
      </InlineInputViewMode>
    );
  }

  return (
    <InlineInputEditMode
      {...props}
      disabled={disabled}
      inputRef={inputRef}
      saveButtonRef={saveButtonRef}
      cancelButtonRef={cancelButtonRef}
      placeholder={placeholder}
      invalid={invalid}
      onCancelClick={handleCancelClick}
      onChange={onChange}
      onClearClick={handleClear}
      onSaveClick={handleSaveClick}
      onKeyDown={handleKeyDown}
      value={
        transitionState === "canceling"
          ? prevValue
          : transitionState === "clearing"
          ? ""
          : value
      }
      vSize={vSize}
    />
  );
};

InlineInput.displayName = "InlineInput";
