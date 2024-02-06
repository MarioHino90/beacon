import styled from "styled-components";
import classNames from "classnames";
import { getColor, getFontSize, getFontWeight } from "@braze/beacon-styling";

import { BannerAlertDescriptionProps } from "./types";

const getAttrs = ({
  className,
}: BannerAlertDescriptionProps): BannerAlertDescriptionProps => ({
  className: classNames("bcl-banner-alert-description", className),
});

export const BannerAlertDescription = styled.div.attrs(
  getAttrs
)<BannerAlertDescriptionProps>`
  font-size: ${getFontSize("body", "xs")};
  font-weight: ${getFontWeight("regular")};
  color: ${getColor("gray", 900)};
`;

BannerAlertDescription.displayName = "BannerAlertDescription";
