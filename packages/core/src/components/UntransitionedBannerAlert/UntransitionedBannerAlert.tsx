import React from "react";
import classNames from "classnames";

import { SimpleBannerAlert } from "../SimpleBannerAlert";
import { IntentContextProvider } from "../BannerAlert/IntentContext";

import { UntransitionedBannerAlertProps } from "./types";
import { StyledBannerContent } from "./StyledBannerContent";

export const UntransitionedBannerAlert = ({
  intent,
  children,
  className,
}: UntransitionedBannerAlertProps): React.ReactElement => (
  <IntentContextProvider intent={intent}>
    <SimpleBannerAlert
      className={classNames("bcl-banner-alert-untransitioned", className)}
    >
      <StyledBannerContent>{children}</StyledBannerContent>
    </SimpleBannerAlert>
  </IntentContextProvider>
);

UntransitionedBannerAlert.displayName = "UntransitionedBannerAlert";
