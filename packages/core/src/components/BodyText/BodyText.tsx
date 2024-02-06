import React from "react";
import classNames from "classnames";

import { BodyTextProps } from "./types";
import { StyledBodyText } from "./StyledBodyText";

export const BodyText = React.forwardRef(
  (
    { className, fontFamily = "base", size = "md", ...props }: BodyTextProps,
    ref: React.RefObject<HTMLSpanElement>
  ) => (
    <StyledBodyText
      {...props}
      ref={ref}
      className={classNames(["bcl-BodyText", "bcl-body-text", className])}
      fontFamily={fontFamily}
      size={size}
    />
  )
);

BodyText.displayName = "BodyText";
