import styled from "styled-components";

import { createGetIntentColor } from "../BannerAlert/getIntentColor";

import { StyledProps } from "./types";

/**
 * get the background color for a specific intent on button hover
 *
 * @param intent - the intent to get the color for
 *
 * @return the color for that intent
 */
export const getIntentHoverBackgroundColor = createGetIntentColor(50);

export const StyledClose = styled.button<StyledProps>`
  width: 40px;
  flex: 0 0 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: none;
  border: none;
  padding: 0;
  margin: 0;

  font-size: 10px;

  cursor: pointer;

  &:hover {
    background: ${getIntentHoverBackgroundColor};
  }
`;
