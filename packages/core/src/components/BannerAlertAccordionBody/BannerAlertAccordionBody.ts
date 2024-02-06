import styled from "styled-components";
import classNames from "classnames";
import { getColor, getFontSize } from "@braze/beacon-styling";

import { BannerAlertAccordionBodyProps } from "./types";

const getAttrs = ({
  className,
}: BannerAlertAccordionBodyProps): BannerAlertAccordionBodyProps => ({
  className: classNames("bcl-banner-alert-accordion-body", className),
});

export const BannerAlertAccordionBody = styled.div.attrs(
  getAttrs
)<BannerAlertAccordionBodyProps>`
  color: ${getColor("gray", 800)};
  font-size: ${getFontSize("body", "xs")};
`;

BannerAlertAccordionBody.displayName = "BannerAlertAccordionBody";
