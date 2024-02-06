import styled from "styled-components";
import { TokenGetter } from "@braze/beacon-styling";

import { StyledIconProps } from "./types";

/**
 * gets the hex value of the color, if possible
 *
 * @param color the color to get the hex value for
 *
 * @returns the hex value string or empty string
 */
const getColorHex = <P extends object>( // eslint-disable-line @typescript-eslint/ban-types
  getColor: TokenGetter<P> | undefined,
  props: P
): string => {
  if (!getColor) {
    return "";
  }

  return getColor(props) || "";
};

export const StyledIcon = styled.span<StyledIconProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: ${({ getColor, ...props }) => getColorHex(getColor, props)};
`;
