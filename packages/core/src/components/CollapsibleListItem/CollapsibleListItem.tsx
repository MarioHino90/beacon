import React from "react";
import classNames from "classnames";

import { CollapsibleListItemProps } from "./types";
import { StyledCollapsibleListItem } from "./StyledCollapsibleListItem";

export const CollapsibleListItem = ({
  className,
  ...props
}: CollapsibleListItemProps): React.ReactElement => (
  <StyledCollapsibleListItem
    {...props}
    className={classNames(["bcl-collapsible-list-item", className])}
  />
);

CollapsibleListItem.displayName = "CollapsibleListItem";
