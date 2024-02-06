/**
 * @fileoverview an uncontrolled version of `Tab`
 */
import React, { useContext, ReactElement } from "react";

import { Tab } from "../Tab";
import { UncontrolledTabsContext } from "../UncontrolledTabsContext";

import { UncontrolledTabProps } from "./types";

export const UncontrolledTab = ({
  tabId,
  ...props
}: UncontrolledTabProps): ReactElement => {
  const { activeTab } = useContext(UncontrolledTabsContext);

  return <Tab tabId={tabId} active={activeTab === tabId} {...props} />;
};
