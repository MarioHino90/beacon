import React from "react";
import classNames from "classnames";

import { PanelBodyProps } from "./types";
import { StyledPanelBody } from "./StyledPanelBody";

export const PanelBody = ({
  className,
  inset = "xl",
  ...props
}: PanelBodyProps): React.ReactElement => (
  <StyledPanelBody
    {...props}
    className={classNames(["bcl-panel-body", className])}
    inset={inset}
  />
);
