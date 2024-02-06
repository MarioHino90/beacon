import React from "react";
import classNames from "classnames";

import { StyledHeading } from "./StyledHeading";
import { HeadingProps } from "./types";

export const Heading = ({
  level = 1,
  variant = "default",
  children,
  className,
  ...props
}: HeadingProps): React.ReactElement => (
  <StyledHeading
    {...props}
    className={classNames(["bcl-Heading", "bcl-heading", className])}
    as={`h${level}` as React.ElementType}
    level={level}
    variant={variant}
  >
    {children}
  </StyledHeading>
);
