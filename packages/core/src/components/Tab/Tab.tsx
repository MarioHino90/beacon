/**
 * @fileoverview a navigational tab component
 */
import React, { useContext, ReactElement } from "react";
import classNames from "classnames";

import { TabsContext } from "../TabsContext";

import { StyledTab } from "./StyledTab";
import { TabProps } from "./types";

export const Tab = ({
  active,
  className,
  tabId,
  disabled,
  onClick: onClickProp,
  onKeyPress: onKeyPressProp,
  ...props
}: TabProps): ReactElement => {
  const { handleChange, handleKeyPress } = useContext(TabsContext);

  // this will preferentially use the passed onChange prop
  const onClick = onClickProp || (() => handleChange(tabId));

  // this will preferentially use the passed onKeyPress prop
  const onKeyPress =
    onKeyPressProp ||
    ((event: React.KeyboardEvent) => handleKeyPress(tabId, event));

  return (
    <StyledTab
      {...props}
      active={active}
      className={classNames([
        "bcl-tab",
        { "bcl-tab-active": active },
        className,
      ])}
      disabled={disabled}
      onClick={disabled ? undefined : onClick}
      onKeyPress={disabled ? undefined : onKeyPress}
      tabIndex={disabled ? -1 : 0}
    />
  );
};
