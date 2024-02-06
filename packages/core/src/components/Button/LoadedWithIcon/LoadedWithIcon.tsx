import React from "react";

import { Icon } from "../../Icon";
import { LoadedWithIconProps } from "../types";

import { StyledLoadedWithIcon } from "./StyledLoadedWithIcon";

export const LoadedWithIcon = ({
  isAnimated,
  name,
}: LoadedWithIconProps): React.ReactElement => {
  return (
    <StyledLoadedWithIcon isAnimated={isAnimated}>
      <Icon name={name} />
    </StyledLoadedWithIcon>
  );
};
