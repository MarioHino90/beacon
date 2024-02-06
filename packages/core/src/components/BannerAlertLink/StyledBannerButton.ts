import styled from "styled-components";

import { Button, StyledButtonContent } from "../Button";

import { bannerAlertLinkStyling } from "./BannerAlertLinkStyling";

export const StyledBannerButton = styled(Button).attrs((props) => ({
  variant: "quaternary",
  ...props,
}))`
  ${bannerAlertLinkStyling}

  ${StyledButtonContent} > *:not(:last-of-type) {
    margin-right: 0;
  }
`;

StyledBannerButton.displayName = "StyledBannerButton";
