import styled, { css } from "styled-components";
import { getColor } from "@braze/beacon-styling";

import { SwitchKnobProps } from "../types";

const getStyles = ({ active, disabled }: SwitchKnobProps) => {
  if (disabled) {
    return null;
  }

  if (active) {
    return css`
      box-shadow: 0px 1px 2px #025f6b;
    `;
  }

  return css`
    box-shadow: 0px 1px 2px ${getColor("gray", 400)};
  `;
};

export const SwitchKnob = styled.div<SwitchKnobProps>`
  background: ${getColor("gray", 0)};
  border-radius: 100%;

  height: 16px;
  width: 16px;

  margin: 0 2px;

  ${getStyles};
`;
