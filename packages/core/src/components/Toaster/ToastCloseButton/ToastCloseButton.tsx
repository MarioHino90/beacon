import React from "react";
import classNames from "classnames";

import { ToastCloseButtonProps } from "../types";
import { CloseButton } from "../../CloseButton";

import { StyledToastCloseButton } from "./StyledToastCloseButton";

export const ToastCloseButton = ({
  className,
  closeToast,
  ...props
}: ToastCloseButtonProps): React.ReactElement => {
  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();

    closeToast(event);
  };

  return (
    <StyledToastCloseButton
      {...props}
      className={classNames("bcl-toast-close-button", className)}
      onClick={handleClick}
    >
      <CloseButton />
    </StyledToastCloseButton>
  );
};
