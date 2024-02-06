import styled from "styled-components";
import classNames from "classnames";

import { BannerAlertDescriptionTextProps } from "./types";

const getAttrs = ({
  className,
}: BannerAlertDescriptionTextProps): BannerAlertDescriptionTextProps => ({
  className: classNames("bcl-banner-alert-description-text", className),
});

export const BannerAlertDescriptionText = styled.span.attrs(
  getAttrs
)<BannerAlertDescriptionTextProps>`
  margin: 0 10px 0 0;
`;

BannerAlertDescriptionText.displayName = "BannerAlertDescriptionText";
