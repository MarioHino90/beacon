import React from "react";
import classNames from "classnames";
import { getIntentColor } from "@braze/beacon-styling";

import { Icon } from "../Icon";
import { BodyText } from "../BodyText";

import { Status, StatusTextProps } from "./types";
import { StyledStatusText } from "./StyledStatusText";

function getIconColor(status: Status) {
  switch (status) {
    case "danger":
      return getIntentColor("danger", 500);
    case "success":
      return getIntentColor("success", 500);
    default:
      return null;
  }
}

function getIconName(status: Status) {
  switch (status) {
    case "danger":
      return "exclamation-triangle";
    case "success":
      return "check-circle";
    default:
      return null;
  }
}

export const StatusText = ({
  className,
  children,
  displayIcon = true,
  status = "danger",
  ...props
}: StatusTextProps): React.ReactElement => {
  const iconColor = getIconColor(status);
  const iconName = getIconName(status);

  return (
    <StyledStatusText
      {...props}
      className={classNames(["bcl-status-text", className])}
    >
      {displayIcon && iconColor && iconName && (
        <Icon color={iconColor} name={iconName} size="sm" />
      )}
      <BodyText variant={status}>{children}</BodyText>
    </StyledStatusText>
  );
};
