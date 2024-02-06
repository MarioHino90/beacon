import React, { useContext } from "react";
import classNames from "classnames";

import { CollapsibleContext } from "../CollapsibleContext";

import { CollapsibleBodyProps } from "./types";
import { StyledCollapsibleBody } from "./StyledCollapsibleBody";

export const CollapsibleBody = ({
  className,
  ...props
}: CollapsibleBodyProps): React.ReactElement | null => {
  const { isOpen } = useContext(CollapsibleContext);

  return (
    <StyledCollapsibleBody
      {...props}
      className={classNames("bcl-collapsible-body", className)}
      isOpen={isOpen}
    />
  );
};

CollapsibleBody.displayName = "CollapsibleBody";
