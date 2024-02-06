import React, { useContext } from "react";
import classNames from "classnames";

import { IntentContext } from "../BannerAlert/IntentContext";

import { BannerAlertAccordionProps } from "./types";
import { StyledAccordion } from "./StyledAccordion";

export const BannerAlertAccordion = ({
  isOpen,
  intent: intentOverride,
  children,
  className,
}: BannerAlertAccordionProps): React.ReactElement | null => {
  const intent = useContext(IntentContext);

  if (!isOpen) {
    return null;
  }

  return (
    <StyledAccordion
      className={classNames("bcl-banner-alert-accordion", className)}
      intent={intentOverride || intent}
    >
      {children}
    </StyledAccordion>
  );
};

BannerAlertAccordion.displayName = "BannerAlertAccordion";
