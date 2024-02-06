/**
 * @fileoverview component that handles showing/hiding tab content - as well as
container styling for tab content
 */
import React, { ReactElement } from "react";

import { TabContentProps } from "./types";
import { StyledTabContent } from "./StyledTabContent";

export const TabContent = ({
  active,
  ...props
}: TabContentProps): ReactElement | null =>
  active ? <StyledTabContent {...props} /> : null;
