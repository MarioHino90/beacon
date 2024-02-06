import React from "react";
import classNames from "classnames";

import { CollapsibleHeaderProps } from "./types";

export const CollapsibleHeader = ({
  className,
  ...props
}: CollapsibleHeaderProps): React.ReactElement => (
  <div
    {...props}
    className={classNames(["bcl-collapsible-header", className])}
  />
);

CollapsibleHeader.displayName = "CollapsibleHeader";
