import React from "react";
import { getColor } from "@braze/beacon-styling";

import { Icon } from "../Icon";

import { BannerAlertCloseProps } from "./types";
import { StyledClose } from "./StyledClose";

export const BannerAlertClose = ({
  intent,
  onClose,
}: BannerAlertCloseProps): React.ReactElement => (
  <StyledClose
    type="button"
    className="bcl-banner-alert-close"
    intent={intent}
    onClick={onClose}
    aria-label="Close"
  >
    <Icon name="times" color={getColor("gray", 300)} />
  </StyledClose>
);

BannerAlertClose.displayName = "BannerAlertClose";
