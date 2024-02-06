import React from "react";
import classNames from "classnames";

import { StyledBannerAlertAccordionHeaderProps } from "./types";
import { StyledBannerAlertAccordionHeader } from "./StyledBannerAlertAccordionHeader";

export const BannerAlertAccordionHeader = ({
  className,
  ...props
}: StyledBannerAlertAccordionHeaderProps): React.ReactElement => (
  <StyledBannerAlertAccordionHeader
    {...props}
    className={classNames("bcl-banner-alert-accordion-header", className)}
    level={6}
  />
);

BannerAlertAccordionHeader.displayName = "BannerAlertAccordionHeader";
