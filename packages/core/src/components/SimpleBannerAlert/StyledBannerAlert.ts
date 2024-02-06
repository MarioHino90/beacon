import styled from "styled-components";
import { getFontFamily, getColor, getFontWeight } from "@braze/beacon-styling";

import { createGetIntentColor } from "../BannerAlert/getIntentColor";

import { StyledSimpleBannerAlertProps } from "./types";

/**
 * get the color to display for a specific intent
 * @param intent - the intent to get the color for
 * @return the color to display
 */
export const getIntentColor = createGetIntentColor(400);

export const StyledBannerAlert = styled.div<StyledSimpleBannerAlertProps>`
  display: flex;
  align-items: stretch;
  justify-content: space-between;

  min-height: 38px;

  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};

  background-color: ${getColor("gray", 0)};

  border: 1px solid;
  border-left: 8px solid;
  border-radius: 3px;

  border-color: ${getIntentColor};
`;
