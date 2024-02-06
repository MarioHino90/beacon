import React from "react";
import classNames from "classnames";

import { HelpTextProps } from "./types";
import { StyledHelpText } from "./StyledHelpText";

export const HelpText = ({
  className,
  ...props
}: HelpTextProps): React.ReactElement => (
  <StyledHelpText
    {...props}
    forwardedAs="small"
    className={classNames(["bcl-help-text", className])}
  />
);
