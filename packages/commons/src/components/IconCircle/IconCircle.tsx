import React from "react";
import classNames from "classnames";
import { Icon, IconProps } from "@braze/beacon-core";

import { IconCircleProps } from "./types";
import { StyledIconCircle } from "./StyledIconCircle";

const getIconByIntent = (
  intent: IconCircleProps["intent"]
): IconProps["name"] => {
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

export const IconCircle = ({
  className,
  intent = "info",
  ...props
}: IconCircleProps): React.ReactElement | null => (
  <StyledIconCircle
    {...props}
    className={classNames(["bcl-icon-circle", className])}
    intent={intent}
  >
    <Icon size="1x" name={getIconByIntent(intent)} />
  </StyledIconCircle>
);

IconCircle.displayName = "IconCircle";
