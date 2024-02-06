import React from "react";
import classNames from "classnames";
import { useIME } from "@braze/beacon-hooks";

import { StyledTextarea } from "./StyledTextarea";
import { TextareaProps } from "./types";

export const Textarea = React.forwardRef(
  (
    { vSize = "md", className, ...props }: TextareaProps,
    ref: React.RefObject<HTMLTextAreaElement>
  ) => {
    const imeProps = useIME<HTMLTextAreaElement>({
      onChange: props.onChange,
      value: props.value,
      defaultValue: props.defaultValue,
      ref,
    });

    return (
      <StyledTextarea
        {...props}
        {...imeProps}
        forwardedAs="textarea"
        className={classNames(["bcl-textarea", className])}
        vSize={vSize}
      />
    );
  }
);

Textarea.displayName = "Textarea";
