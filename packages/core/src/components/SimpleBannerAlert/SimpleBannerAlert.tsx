import React, { useContext } from "react";
import classNames from "classnames";

import { IntentContext } from "../BannerAlert/IntentContext";

import { SimpleBannerAlertProps } from "./types";
import { StyledBannerAlert } from "./StyledBannerAlert";

export const SimpleBannerAlert = ({
  intent: intentOverride,
  children,
  className,
}: SimpleBannerAlertProps): React.ReactElement => {
  const intent = useContext(IntentContext);

  return (
    <StyledBannerAlert
      intent={intentOverride || intent}
      className={classNames(["bcl-banner-alert", className])}
    >
      {children}
    </StyledBannerAlert>
  );
};

SimpleBannerAlert.displayName = "SimpleBannerAlert";
