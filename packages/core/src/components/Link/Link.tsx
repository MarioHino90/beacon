import { useI18nNamespace } from "@braze/beacon-translations";
import React, { forwardRef } from "react";

import { ScreenReaderText } from "../ScreenReaderText";
import { Icon } from "../Icon";

import { StyledLink } from "./StyledLink";
import { LinkProps } from "./types";

export const Link = forwardRef(
  (
    props: LinkProps,
    ref: React.RefObject<HTMLAnchorElement>
  ): React.ReactElement => {
    const { t } = useI18nNamespace("beacon-field-label");

    if (props?.target === "_blank") {
      return (
        <>
          <ScreenReaderText id="open-in-new-tab">
            {t("open-in-new-tab", "Opening in a new tab")}
          </ScreenReaderText>
          <StyledLink
            ref={ref}
            {...props}
            rel={props?.rel || "nofollow noreferrer"}
            aria-labelledby="open-in-new-tab"
          >
            {props.children}
            {props.showExternalLinkIcon && (
              <Icon
                name={"external-link-alt"}
                size="1x"
                className="external-link-icon"
              />
            )}
          </StyledLink>
        </>
      );
    }

    return <StyledLink ref={ref} {...props} />;
  }
);

Link.displayName = "Link";
