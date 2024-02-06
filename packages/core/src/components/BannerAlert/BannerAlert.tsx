import React, { FC } from "react";
import classNames from "classnames";

import { UntransitionedBannerAlert } from "../UntransitionedBannerAlert";

import { BannerAlertProps } from "./types";
import { StyledBannerTransition } from "./StyledBannerTransition";

export const BannerAlert: FC<BannerAlertProps> = ({
  isOpen,
  className,
  intent,
  children,
  ...props
}) => {
  return (
    <StyledBannerTransition
      className={classNames(["bcl-banner-alert-transition", className])}
      isOpen={isOpen}
      {...props}
    >
      <UntransitionedBannerAlert className={className} intent={intent}>
        {children}
      </UntransitionedBannerAlert>
    </StyledBannerTransition>
  );
};

BannerAlert.displayName = "BannerAlert";
