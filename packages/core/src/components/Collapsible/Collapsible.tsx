import React from "react";
import classNames from "classnames";

import { CollapsibleContextProvider } from "../CollapsibleContext";

import { CollapsibleProps } from "./types";
import { StyledCollapsible } from "./StyledCollapsible";

export const Collapsible = ({
  className,
  isOpen,
  toggle,
  alignment = "left",
  ...props
}: CollapsibleProps): React.ReactElement => (
  <CollapsibleContextProvider isOpen={isOpen} toggle={toggle}>
    <StyledCollapsible
      {...props}
      className={classNames(["bcl-collapsible", className])}
      alignment={alignment}
    />
  </CollapsibleContextProvider>
);

Collapsible.displayName = "Collapsible";
