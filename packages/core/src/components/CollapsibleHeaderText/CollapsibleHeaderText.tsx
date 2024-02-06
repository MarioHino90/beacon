import React from "react";
import classNames from "classnames";

import { CollapsibleHeaderTextProps } from "./types";
import { StyledCollapsibleHeaderText } from "./StyledCollapsibleHeaderText";

export const CollapsibleHeaderText = ({
  className,
  ...props
}: CollapsibleHeaderTextProps): React.ReactElement => (
  <StyledCollapsibleHeaderText
    {...props}
    className={classNames(["bcl-collapsible-header-text", className])}
  />
);

CollapsibleHeaderText.displayName = "CollapsibleHeaderText";
