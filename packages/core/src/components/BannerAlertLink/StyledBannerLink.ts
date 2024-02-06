import styled from "styled-components";

import { Link } from "../Link";
import { createGetIntentColor } from "../BannerAlert/getIntentColor";

import { bannerAlertLinkStyling } from "./BannerAlertLinkStyling";
import { StyledLinkProps } from "./types";

/**
 * get the link color to display for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the link
 */
export const getIntentColor = createGetIntentColor(500);

/**
 * get the link color to display on hover for a specific intent
 *
 * @param intent - the intent to get the color for
 *
 * @return the color of the link on hover
 */
export const getIntentHoverColor = createGetIntentColor(400);

export const StyledBannerLink = styled(Link)<StyledLinkProps>`
  ${bannerAlertLinkStyling}

  color: ${getIntentColor};
  text-decoration-color: ${getIntentColor};

  &:hover {
    color: ${getIntentHoverColor};
    text-decoration-color: ${getIntentHoverColor};
  }
`;

StyledBannerLink.displayName = "StyledBannerLink";
