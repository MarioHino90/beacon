import classNames from "classnames";
import styled, { css } from "styled-components";
import { getColor } from "@braze/beacon-styling";

import { StyledCheckbox } from "../StyledCheckbox";

export interface CheckboxContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  /** indicates whether the radio button should be disabled */
  disabled?: boolean;
}

const getAttrs = ({ className }: CheckboxContainerProps) => ({
  className: classNames(className, "bcl-checkbox-container"),
});

export const CheckboxContainer = styled.div.attrs(
  getAttrs
)<CheckboxContainerProps>`
  display: inline-block;
  vertical-align: middle;

  &:hover,
  &:focus {
    ${StyledCheckbox} {
      ${({ disabled }) =>
        !disabled &&
        css`
          box-shadow: 0 0 0 5px ${getColor("gray", 100)};
        `};
    }
  }
`;

CheckboxContainer.displayName = "CheckboxContainer";
