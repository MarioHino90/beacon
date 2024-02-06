import React from "react";
import classNames from "classnames";

import { FlexBoxProps } from "./types";
import { StyledFlexBox } from "./StyledFlexBox";

export const FlexBox = React.forwardRef(
  (
    { className, ...props }: FlexBoxProps,
    ref: React.RefObject<HTMLDivElement>
  ) => (
    <StyledFlexBox
      {...props}
      className={classNames(["bcl-flex-box", className])}
      ref={ref}
    />
  )
);

FlexBox.displayName = "FlexBox";
