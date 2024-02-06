import { useCallback, useEffect, useRef, useState } from "react";

import { UseIMEProps, UseIMEReturn } from "./types";

/**
 * Handle both standard character input and IME character input transparently for any input element
 *
 * This can be used for both inputs and textareas.
 *
 * @example
 * const imeProps = useIME<HTMLInputElement>({ onChange: userSuppliedOnChange, value: userSuppliedValue, ref });
 * return (
 *   <input {...props} {...imeProps} />
 * )
 */
export function useIME<El extends HTMLInputElement | HTMLTextAreaElement>({
  onChange: userOnChange,
  value,
  defaultValue,
  ref: userRef,
}: UseIMEProps<El>): UseIMEReturn<El> {
  const valueString = value === undefined ? defaultValue || "" : value;
  const composing = useRef(false);
  const cursor = useRef<number | null>(null);
  const [text, setText] = useState(valueString);
  const inputRef = useRef<El>();
  const ref = userRef || inputRef;
  // these next 2 refs are solely to ensure we can use these values without triggering the effect to update value
  // unless the user explicitly changes the value passed in.
  const onChangeRef = useRef(userOnChange);
  const currentInputRef = useRef(ref.current);

  // store the last change event object. This is needed because
  // input method editors trigger "compositionend" after "change"
  // and getting a new "change" event by dispatching on the native
  // input does not trigger a new change event. Creating a new
  // SyntheticEvent requires using undocumented APIs.
  // Fortunately, since the change event does not store any state
  // except for the target, which is the input element, we can
  // safely "re-trigger" it by passing it to the onChange handler
  // the user passed in.
  const fakedChangeEvent = useRef<React.ChangeEvent<El>>();

  // ensure this is always up-to-date in the useEffect below
  onChangeRef.current = userOnChange;

  // ensure this is always up-to-date in the useEffect below
  currentInputRef.current = ref.current;

  useEffect(() => {
    setText(valueString);

    if (currentInputRef.current) {
      // force the input to have the new value
      currentInputRef.current.value = valueString as unknown as string;

      // force the input to persist selection
      try {
        currentInputRef.current.setSelectionRange(
          cursor.current,
          cursor.current
        );
      } catch (err) {
        // Browsers such as safari support `setSelectionRange` for all
        // input types while others like chrome do not.
        if (
          !(err instanceof DOMException) ||
          err.name !== "InvalidStateError"
        ) {
          throw err;
        }
      }

      if (fakedChangeEvent.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChangeRef.current?.(fakedChangeEvent.current as any);
      }
    }
  }, [valueString]);

  const onChange = useCallback(
    (event: React.ChangeEvent<El>) => {
      setText(event.target.value);

      cursor.current = event.target.selectionStart;

      if (!composing.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        userOnChange?.(event as any);
      } else {
        fakedChangeEvent.current = event;

        event.persist();
      }
    },
    [userOnChange]
  );

  const onCompositionStart = useCallback(() => {
    composing.current = true;
  }, []);
  const onCompositionEnd = useCallback(() => {
    composing.current = false;

    if (fakedChangeEvent.current) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      userOnChange?.(fakedChangeEvent.current as any);
    }
  }, [userOnChange]);

  return {
    value: text,
    defaultValue,
    ref: ref as React.RefObject<El> | React.MutableRefObject<El>,
    onCompositionEnd,
    onChange,
    onCompositionStart,
  };
}
