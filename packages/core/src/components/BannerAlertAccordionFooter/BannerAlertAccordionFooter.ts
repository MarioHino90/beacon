import styled from "styled-components";
import classNames from "classnames";
import { getSpacing } from "@braze/beacon-styling";

import { BannerAlertAccordionFooterProps } from "./types";

const getAttrs = ({ className }: BannerAlertAccordionFooterProps) => ({
  className: classNames("bcl-banner-alert-accordion-footer", className),
});

export const BannerAlertAccordionFooter = styled.div.attrs(
  getAttrs
)<BannerAlertAccordionFooterProps>`
  display: flex;
  justify-content: flex-end;
  padding-top: ${getSpacing("xl")};
`;

BannerAlertAccordionFooter.displayName = "BannerAlertAccordionFooter";
