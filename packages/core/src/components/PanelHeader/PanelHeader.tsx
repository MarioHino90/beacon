import React from "react";
import classNames from "classnames";

import { PanelHeaderProps } from "./types";
import { StyledPanelHeader } from "./StyledPanelHeader";

export const PanelHeader = ({
  className,
  ...props
}: PanelHeaderProps): React.ReactElement => (
  <StyledPanelHeader
    {...props}
    className={classNames(["bcl-panel-header", className])}
  />
);
