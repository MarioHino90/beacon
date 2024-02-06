import React from "react";
import classNames from "classnames";
import { Icon } from "@braze/beacon-core";
import { getIntentColor, getColor } from "@braze/beacon-styling";

import { InfoIconProps } from "./types";

export const InfoIcon = React.forwardRef(
  (
    {
      className,
      variant = "regular",
      altText = "Information",
      ...props
    }: InfoIconProps,
    ref: React.RefObject<HTMLSpanElement>
  ): React.ReactElement => (
    <Icon
      {...props}
      ref={ref}
      className={classNames("bclcom-info-icon", className)}
      aria-label={altText}
      name="info-circle"
      color={
        variant === "regular"
          ? getIntentColor("primary", 500)
          : getColor("gray", 300)
      }
    />
  )
);

InfoIcon.displayName = "InfoIcon";
