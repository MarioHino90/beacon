/**
 * @fileoverview an uncontrolled version of `TabContentProps`
 */
import React, { useContext, ReactElement } from "react";

import { TabContent } from "../TabContent";
import { UncontrolledTabsContext } from "../UncontrolledTabsContext";

import { UncontrolledTabContentProps } from "./types";

export const UncontrolledTabContent = ({
  tabId,
  ...props
}: UncontrolledTabContentProps): ReactElement => {
  const { activeTab } = useContext(UncontrolledTabsContext);

  return <TabContent active={activeTab === tabId} {...props} />;
};
