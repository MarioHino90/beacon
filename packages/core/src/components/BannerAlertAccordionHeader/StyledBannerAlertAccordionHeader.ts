import styled from "styled-components";
import { getColor, getSpacing } from "@braze/beacon-styling";

import { Heading } from "../Heading";

import { StyledBannerAlertAccordionHeaderProps } from "./types";

export const StyledBannerAlertAccordionHeader = styled(
  Heading
)<StyledBannerAlertAccordionHeaderProps>`
  &:not(:first-of-type) {
    border-top: 1px solid ${getColor("gray", 200)};
    margin-top: ${getSpacing("lg")};
    padding-top: ${getSpacing("lg")};
  }
`;
