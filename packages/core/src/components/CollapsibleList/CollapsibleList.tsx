import React from "react";
import classNames from "classnames";

import { Heading } from "../Heading";

import { CollapsibleListProps } from "./types";
import { StyledCollapsibleList } from "./StyledCollapsibleList";

export const CollapsibleList = ({
  children,
  className,
  heading,
  ...props
}: CollapsibleListProps): React.ReactElement => (
  <StyledCollapsibleList
    {...props}
    className={classNames(["bcl-collapsible-list", className])}
  >
    {heading && (
      <Heading level={5} variant="light">
        {heading}
      </Heading>
    )}
    <ul>{children}</ul>
  </StyledCollapsibleList>
);

CollapsibleList.displayName = "CollapsibleList";
