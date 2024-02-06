import React from "react";
import classNames from "classnames";
import { getColor } from "@braze/beacon-styling";

import { BodyText } from "../BodyText";
import { Flex } from "../Flex";
import { Icon } from "../Icon";
import { MenuButton } from "../MenuButton";

import { MenuActionButtonProps } from "./types";

export const MenuActionButton = ({
  children,
  className,
  iconName,
  ...props
}: MenuActionButtonProps): React.ReactElement => (
  <li role="menuitem">
    <MenuButton
      {...props}
      className={classNames(["bcl-menu-action-button", className])}
      aria-label={
        typeof children === "string" ? children.toLowerCase() : undefined
      }
    >
      {iconName && (
        <Flex style={{ minWidth: 32 }} justifyContent="center">
          <Icon name={iconName} color={getColor("gray", 600)} size="1x" />
        </Flex>
      )}
      <BodyText size="md">{children}</BodyText>
    </MenuButton>
  </li>
);

MenuActionButton.displayName = "MenuActionButton";
