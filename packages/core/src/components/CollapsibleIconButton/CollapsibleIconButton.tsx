import React, { useContext } from "react";
import classNames from "classnames";

import { IconButton } from "../IconButton";
import { CollapsibleContext } from "../CollapsibleContext";

import { CollapsibleIconButtonProps } from "./types";

export const CollapsibleIconButton = ({
  className,
  ...props
}: CollapsibleIconButtonProps): React.ReactElement => {
  const { isOpen, toggle } = useContext(CollapsibleContext);

  return (
    <IconButton
      {...props}
      className={classNames(["bcl-collapsible-icon-button", className])}
      name={isOpen ? "angle-up" : "angle-down"}
      onClick={toggle}
    />
  );
};

CollapsibleIconButton.displayName = "CollapsibleIconButton";
