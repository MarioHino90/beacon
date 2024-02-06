import React, { useContext } from "react";
import classNames from "classnames";

import { Heading } from "../Heading";
import { Icon, BrazeIconName } from "../Icon";
import { ModalContext } from "../ModalContext";

import { StyledModalHeading } from "./StyledModalHeading";
import { ModalHeadingProps, IconTypes } from "./types";

const getIconName = (iconType?: IconTypes): BrazeIconName | void => {
  switch (iconType) {
    case "warning":
      return "exclamation-triangle";
    default:
      return;
  }
};

export const ModalHeading = ({
  className,
  children,
  iconType,
  level = 2,
  ...props
}: ModalHeadingProps): React.ReactElement => {
  const iconName = getIconName(iconType);
  const { size } = useContext(ModalContext);

  return (
    <StyledModalHeading
      {...props}
      iconType={iconType}
      className={classNames(["bcl-modal-header", className])}
    >
      {iconName ? <Icon className="optional-icon" name={iconName} /> : null}
      <Heading level={size === "sm" ? 3 : level}>{children}</Heading>
    </StyledModalHeading>
  );
};
