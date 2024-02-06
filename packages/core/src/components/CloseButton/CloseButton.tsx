import React, { forwardRef } from "react";
import classNames from "classnames";

import { Icon } from "../Icon";

import { StyledCloseButton, StyledCloseButtonProps } from "./StyledCloseButton";

export interface CloseButtonProps extends StyledCloseButtonProps {}

export const CloseButton = forwardRef(
  (
    { className, size = "sm", ...props }: CloseButtonProps,
    ref: React.RefObject<HTMLButtonElement>
  ): React.ReactElement => (
    <StyledCloseButton
      {...props}
      ref={ref}
      type="button"
      className={classNames(["bcl-close-button", className])}
      aria-label="close"
      size={size}
    >
      <Icon name="times" />
    </StyledCloseButton>
  )
);

CloseButton.displayName = "CloseButton";
