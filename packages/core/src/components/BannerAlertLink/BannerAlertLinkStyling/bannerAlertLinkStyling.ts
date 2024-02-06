import { css } from "styled-components";
import {
  getFontSize,
  getFontFamily,
  getFontWeight,
} from "@braze/beacon-styling";

/** css for styling both the button and the link */
export const bannerAlertLinkStyling = css`
  display: inline-flex;
  cursor: pointer;

  font-weight: bold;
  font-size: ${getFontSize("body", "xs")};
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("bold")};
  text-decoration: underline;
`;
