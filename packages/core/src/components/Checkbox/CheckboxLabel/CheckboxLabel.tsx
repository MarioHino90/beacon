import classNames from "classnames";
import styled from "styled-components";
import {
  getSpacing,
  getFontFamily,
  getFontWeight,
} from "@braze/beacon-styling";

import { Label, LabelProps } from "../../Label";
import { CheckboxLabelProps } from "../types";

const getAttrs = ({ className }: CheckboxLabelProps): LabelProps => ({
  className: classNames(className, "bcl-checkbox-label"),
});

export const CheckboxLabel = styled(Label).attrs(getAttrs)<CheckboxLabelProps>`
  margin-left: ${getSpacing("sm")};
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  cursor: ${(props) => (props.disabled ? "no-drop" : "pointer")};
`;

CheckboxLabel.displayName = "CheckboxLabel";
