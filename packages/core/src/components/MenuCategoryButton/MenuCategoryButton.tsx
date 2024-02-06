import React from "react";
import classNames from "classnames";

import { BodyText } from "../BodyText";
import { Box } from "../Box";
import { BrazeIcon } from "../BrazeIcon";
import { Flex } from "../Flex";
import { FlexBox } from "../FlexBox";
import { Heading } from "../Heading";
import { MenuButton } from "../MenuButton";

import { MenuCategoryButtonProps } from "./types";

export const MenuCategoryButton = ({
  children,
  className,
  heading,
  iconName,
  ...props
}: MenuCategoryButtonProps): React.ReactElement => (
  <li role="none">
    <MenuButton
      {...props}
      className={classNames(["bcl-menu-category-button", className])}
      role="menuitem"
      tabIndex={-1}
      aria-label={
        typeof children === "string" ? children.toLowerCase() : undefined
      }
    >
      {iconName && (
        <FlexBox
          style={{ minWidth: 32 }}
          justifyContent="center"
          alignItems="center"
          boxMargin={{ right: "lg" }}
        >
          <BrazeIcon name={iconName} />
        </FlexBox>
      )}
      <Flex direction="column">
        <Box boxMargin={{ bottom: "xs" }}>
          <Heading level={5} variant="light">
            {heading}
          </Heading>
        </Box>
        <BodyText size="sm">{children}</BodyText>
      </Flex>
    </MenuButton>
  </li>
);

MenuCategoryButton.displayName = "MenuCategoryButton";
