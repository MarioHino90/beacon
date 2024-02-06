import React, { useContext } from "react";

import { BannerAlertClose } from "../BannerAlertClose";
import { BannerAlertIcon } from "../BannerAlertIcon";
import { IntentContext } from "../BannerAlert/IntentContext";

import { BannerAlertBodyProps } from "./types";
import { StyledBannerBodyWrapper } from "./StyledBannerBodyWrapper";
import { StyledBannerBody } from "./StyledBannerBody";
import { StyledBodyWrapper } from "./StyledBodyWrapper";

export const BannerAlertBody = ({
  children,
  onClose,
  Icon,
  ...props
}: BannerAlertBodyProps): React.ReactElement => {
  const intent = useContext(IntentContext);

  return (
    <StyledBannerBodyWrapper
      className="bcl-banner-alert-body"
      hasClose={!!onClose}
      {...props}
    >
      <StyledBannerBody className="bcl-banner-alert-inner-body">
        <div className="bcl-banner-alert-body-icon">
          {Icon || <BannerAlertIcon intent={intent} />}
        </div>
        <StyledBodyWrapper className="bcl-banner-alert-body-children-wrapper">
          {children}
        </StyledBodyWrapper>
      </StyledBannerBody>
      {onClose ? <BannerAlertClose intent={intent} onClose={onClose} /> : null}
    </StyledBannerBodyWrapper>
  );
};

BannerAlertBody.displayName = "BannerAlertBody";
