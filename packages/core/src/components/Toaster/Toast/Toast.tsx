import React from "react";
import classNames from "classnames";

import { ToastProps } from "../types";
import { Flex } from "../../Flex";
import { Icon } from "../../Icon";

import { StyledToast } from "./StyledToast";

const mapIntentToIcon = (intent: ToastProps["intent"]) => {
  switch (intent) {
    case "danger":
      return "times";
    case "success":
      return "check";
    case "warning":
      return "exclamation";
    case "info":
    default:
      return "info";
  }
};

export const Toast = ({
  children,
  className,
  intent,
  ...props
}: ToastProps): React.ReactElement | null => {
  const name = mapIntentToIcon(intent);

  return (
    <Flex alignItems="center" style={{ height: "100%" }}>
      <StyledToast
        {...props}
        className={classNames(["bcl-toast", className])}
        intent={intent}
      >
        {name && <Icon name={name} />}
        {children}
      </StyledToast>
    </Flex>
  );
};

Toast.displayName = "Toast";
