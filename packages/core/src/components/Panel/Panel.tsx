import React from "react";
import classNames from "classnames";

import { PanelProps } from "./types";
import { StyledPanel } from "./StyledPanel";

export const Panel = ({
  className,
  background = "default",
  ...props
}: PanelProps): React.ReactElement => (
  <StyledPanel
    {...props}
    className={classNames(["bcl-Panel", "bcl-panel", className])}
    background={background}
  />
);
