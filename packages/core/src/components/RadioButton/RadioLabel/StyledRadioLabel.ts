import styled, { css } from "styled-components";
import {
  colorSelector,
  intentColorSelector,
  getFontFamily,
  borderWidthSelector,
  getColor,
  getFontWeight,
} from "@braze/beacon-styling";

import { StyledRadioLabelProps } from "../types";
import { Label } from "../../Label";

const mdRadioSize = 18;
const mdRadioCheckedSize = 12;

function borderSwitch({
  checked,
  disabled,
  invalid,
  ...props
}: StyledRadioLabelProps) {
  if (disabled) {
    return colorSelector(props, "gray", 300);
  }

  if (checked) {
    return intentColorSelector(props, "info", 500);
  }

  if (invalid) {
    return intentColorSelector(props, "danger", 500);
  }

  return colorSelector(props, "gray", 400);
}

export const radioButtonShadowCss = css`
  box-shadow: 0 0 0 5px ${getColor("gray", 100)};
`;

export const StyledRadioLabel = styled(Label)<StyledRadioLabelProps>`
  min-height: ${mdRadioSize + 2}px;
  padding: 0 ${mdRadioSize + 12}px;
  margin-bottom: 0 !important;
  cursor: pointer;
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
  color: ${(props) =>
    props.disabled
      ? colorSelector(props, "gray", 400)
      : colorSelector(props, "gray", 900)};

  &:before,
  &:after {
    position: absolute;
    content: "";
    border-radius: 50%;
    transition: 0.15s all;
  }

  &:before {
    left: 0;
    top: 0;
    width: ${(props) => (props.invalid ? mdRadioSize - 1 : mdRadioSize)}px;
    height: ${(props) => (props.invalid ? mdRadioSize - 1 : mdRadioSize)}px;
    border-color: ${borderSwitch};
    border-style: solid;
    border-width: ${(props) =>
      props.invalid
        ? borderWidthSelector(props, "thick")
        : borderWidthSelector(props, "thin")};
    background: ${(props) =>
      props.disabled && colorSelector(props, "gray", 100)};
  }

  &:hover::before {
    ${radioButtonShadowCss}
  }

  &:after {
    top: ${(mdRadioSize - mdRadioCheckedSize) / 2 + 1}px;
    left: ${(mdRadioSize - mdRadioCheckedSize) / 2 + 1}px;
    width: ${(props) =>
      props.invalid ? mdRadioCheckedSize + 1 : mdRadioCheckedSize}px;
    height: ${(props) =>
      props.invalid ? mdRadioCheckedSize + 1 : mdRadioCheckedSize}px;
    background: ${(props) =>
      !props.disabled
        ? intentColorSelector(props, "info", 500)
        : colorSelector(props, "gray", 300)};
    opacity: 0;
  }

  span {
    line-height: 1.7;
  }
`;
