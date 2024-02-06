import React from "react";
import { useId } from "@braze/beacon-hooks";

import { FlexBox } from "../../FlexBox";
import { LoadingIconWithGradientProps } from "../types";

import {
  StyledLoadingIconWithGradient,
  StyledLoadingSpinnerPath,
  StyledLinearGradient0Stop,
  StyledLinearGradient100Stop,
} from "./StyledLoadingIconWithGradient";

const gradientSuffix = "-gradient";

export const LoadingIconWithGradient = ({
  intent,
  size,
  variant,
}: LoadingIconWithGradientProps): React.ReactElement => {
  const rootId = useId("bcl-loading-icon-with-gradient-");

  return (
    <FlexBox
      inline
      justifyContent="center"
      alignItems="center"
      boxMargin={{ right: "sm" }}
    >
      <StyledLoadingIconWithGradient
        className="bcl-loading-spinner"
        viewBox="0 0 50 50"
        size={size}
      >
        <StyledLoadingSpinnerPath
          id={`${rootId}-circle`}
          gradientId={`${rootId}${gradientSuffix}`}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="8"
        />
        <linearGradient id={`${rootId}${gradientSuffix}`}>
          <StyledLinearGradient0Stop
            offset="0%"
            intent={intent}
            size={size}
            variant={variant}
          />
          <StyledLinearGradient100Stop
            offset="100%"
            intent={intent}
            size={size}
            variant={variant}
          />
        </linearGradient>
      </StyledLoadingIconWithGradient>
    </FlexBox>
  );
};
