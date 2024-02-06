import React, { useContext } from "react";
import classNames from "classnames";

import { Icon } from "../Icon";
import { CollapsibleContext } from "../CollapsibleContext";

import { CollapsibleButtonProps } from "./types";
import { StyledCollapsibleButton } from "./StyledCollapsibleButton";

export const CollapsibleButton = ({
  children,
  className,
  variant = "quaternary",
  ...props
}: CollapsibleButtonProps): React.ReactElement => {
  const { isOpen, toggle } = useContext(CollapsibleContext);

  return (
    <StyledCollapsibleButton
      {...props}
      className={classNames(["bcl-collapsible-button", className])}
      type="button"
      intent="info"
      variant={variant}
      onClick={toggle}
    >
      {children}
      <Icon name={isOpen ? "angle-up" : "angle-down"} />
    </StyledCollapsibleButton>
  );
};

CollapsibleButton.displayName = "CollapsibleButton";
