import React from "react";
import classNames from "classnames";

import { Heading } from "../Heading";

import { MenuGroupProps } from "./types";
import { StyledMenuGroup } from "./StyledMenuGroup";

export const MenuGroup = ({
  children,
  className,
  heading,
  ...props
}: MenuGroupProps): React.ReactElement => (
  <StyledMenuGroup
    {...props}
    className={classNames(["bcl-menu-group", className])}
    hasHeading={!!heading}
  >
    {heading && <Heading level={6}>{heading}</Heading>}
    {children}
  </StyledMenuGroup>
);

MenuGroup.displayName = "MenuGroup";
