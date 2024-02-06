import React from "react";
import classNames from "classnames";

import { Icon, BrazeIconName } from "../Icon";
import { UncontrolledTooltip } from "../UncontrolledTooltip";

import { Variants, AnnotationProps } from "./types";
import { StyledAnnotation } from "./StyledAnnotation";

function getVariantIcons(variant: Variants): BrazeIconName {
  switch (variant) {
    case "warning":
    case "error":
      return "exclamation-circle";
    case "info":
    default:
      return "info-circle";
  }
}

export const Annotation = ({
  className,
  children,
  disabled,
  variant = "info",
  ...props
}: AnnotationProps): React.ReactElement => {
  if (disabled) {
    return <>{children}</>;
  }

  return (
    <UncontrolledTooltip {...props}>
      <StyledAnnotation
        className={classNames(["bcl-Annotation", "bcl-annotation", className])}
        variant={variant}
      >
        {children}
        <Icon name={getVariantIcons(variant)} size="1x" />
      </StyledAnnotation>
    </UncontrolledTooltip>
  );
};
