import styled from "styled-components";
import classNames from "classnames";
import {
  getFontFamily,
  getColor,
  getFontWeight,
  getFontSize,
} from "@braze/beacon-styling";

import { BannerAlertTitleProps } from "./types";

const getAttrs = ({
  className,
}: BannerAlertTitleProps): BannerAlertTitleProps => ({
  className: classNames("bcl-banner-alert-title", className),
});

export const BannerAlertTitle = styled.span.attrs(
  getAttrs
)<BannerAlertTitleProps>`
  font-family: ${getFontFamily("base")};
  font-size: ${getFontSize("body", "xs")};
  font-weight: ${getFontWeight("bold")};
  color: ${getColor("gray", 800)};
  margin: 0 10px 0 0;
`;

BannerAlertTitle.displayName = "BannerAlertTitle";
