import React, { useContext } from "react";
import classNames from "classnames";

import { ButtonProps as StyledButtonProps } from "../Button";
import { Icon, BrazeIconName } from "../Icon";
import { IntentContext } from "../BannerAlert/IntentContext";

import { StyledBannerButton } from "./StyledBannerButton";
import { StyledBannerLink } from "./StyledBannerLink";
import { StyledCaretWrapper } from "./StyledCaretWrapper";
import { BannerAlertLinkProps, StyledLinkProps } from "./types";

export const BannerAlertLink = ({
  intent: intentOverride,
  children,
  className,
  onClick,
  as = "button",
  caret,
  ...props
}: BannerAlertLinkProps): React.ReactElement => {
  const intentContext = useContext(IntentContext);
  const intent = intentOverride || intentContext;

  const caretName = `angle-${caret}` as BrazeIconName;

  return as === "a" ? (
    <StyledBannerLink
      {...(props as StyledLinkProps)}
      className={classNames("bcl-banner-alert-link", className)}
      onClick={onClick}
      intent={intent}
    >
      {children}
      {caret ? (
        <StyledCaretWrapper>
          <Icon name={caretName} />
        </StyledCaretWrapper>
      ) : null}
    </StyledBannerLink>
  ) : (
    <StyledBannerButton
      onClick={onClick}
      intent={intent}
      {...(props as StyledButtonProps)}
      className={classNames("bcl-banner-alert-link", classNames)}
    >
      {children}
      {caret ? (
        <StyledCaretWrapper>
          <Icon name={caretName} />
        </StyledCaretWrapper>
      ) : null}
    </StyledBannerButton>
  );
};

BannerAlertLink.displayName = "BannerAlertLink";
