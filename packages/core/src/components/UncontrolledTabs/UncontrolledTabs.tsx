/**
 * @fileoverview an uncontrolled version of `Tabs`
 */
import React, { useContext, ReactElement } from "react";

import { Tabs } from "../Tabs";
import { UncontrolledTabsContext } from "../UncontrolledTabsContext";

import { UncontrolledTabsProps } from "./types";

export const UncontrolledTabs = (
  props: UncontrolledTabsProps
): ReactElement => {
  const { onTabChange } = useContext(UncontrolledTabsContext);

  return <Tabs onChange={onTabChange} {...props} />;
};
