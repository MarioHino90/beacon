import React from "react";
import { getIntentColor } from "@braze/beacon-styling";

import { Icon, BrazeIconName } from "../Icon";
import { Intent } from "../BannerAlert";

import { BannerAlertIconProps } from "./types";
import { StyledBannerIcon } from "./StyledBannerIcon";

/**
 * get the icon to display for a specific intent
 *
 * @param intent - the intent to get an icon for
 *
 * @return the name of the icon to display
 */
export const getIcon = (intent: Intent): BrazeIconName => {
  if (intent === "info") {
    return "info";
  }

  if (intent === "warning") {
    return "exclamation";
  }

  if (intent === "danger") {
    return "times";
  }

  return "check";
};

export const BannerAlertIcon = ({
  intent,
}: BannerAlertIconProps): React.ReactElement => (
  <StyledBannerIcon
    className="bcl-banner-alert-icon"
    intent={intent}
    alignItems="center"
    justifyContent="center"
    boxMargin={{ vertical: "none", horizontal: "md" }}
  >
    <Icon name={getIcon(intent)} color={getIntentColor(intent, 500)} />
  </StyledBannerIcon>
);

BannerAlertIcon.displayName = "BannerAlertIcon";
