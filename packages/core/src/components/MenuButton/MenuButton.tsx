import React from "react";
import classNames from "classnames";

import { MenuButtonProps } from "./types";
import { StyledMenuButton } from "./StyledMenuButton";

export const MenuButton = ({
  className,
  ...props
}: MenuButtonProps): React.ReactElement => (
  <StyledMenuButton
    {...props}
    className={classNames(["bcl-menu-button", className])}
    type="button"
  />
);

MenuButton.displayName = "MenuButton";
