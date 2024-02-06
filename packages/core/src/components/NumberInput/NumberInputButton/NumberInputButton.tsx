import React from "react";
import classNames from "classnames";

import { NumberInputButtonProps } from "../types";
import { Icon, IconComponentName } from "../../Icon";

import { StyledNumberInputButton } from "./StyledNumberInputButton";

export const NumberInputButton = ({
  className,
  direction,
  ...props
}: NumberInputButtonProps): React.ReactElement | null => (
  <StyledNumberInputButton
    {...props}
    className={classNames(["bcl-number-input-button", className])}
    direction={direction}
  >
    {direction && (
      <Icon size="1x" name={`angle-${direction}` as IconComponentName} />
    )}
  </StyledNumberInputButton>
);

NumberInputButton.displayName = "NumberInputButton";
