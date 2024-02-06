import styled from "styled-components";
import classNames from "classnames";
import {
  getFontFamily,
  getFontSize,
  getFontWeight,
  getSpacing,
} from "@braze/beacon-styling";

import { SwitchLabelProps } from "../types";

const getAttrs = ({ className }: SwitchLabelProps) => ({
  className: classNames("bcl-switch-label", className),
});

export const SwitchLabel = styled.div.attrs(getAttrs)<SwitchLabelProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  font-size: ${getFontSize("body", "md")};
  margin-left: ${getSpacing("md")};
`;

SwitchLabel.displayName = "SwitchLabel";
