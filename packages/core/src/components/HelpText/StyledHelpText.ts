import styled from "styled-components";
import { colorSelector, getFontSize } from "@braze/beacon-styling";

import { BodyText } from "../BodyText";

import { StyledHelpTextProps } from "./types";

export const StyledHelpText = styled(BodyText)<StyledHelpTextProps>`
  font-size: ${getFontSize("body", "xs")};
  color: ${(props) =>
    props.disabled
      ? colorSelector(props, "gray", 400)
      : colorSelector(props, "gray", 600)};
`;
