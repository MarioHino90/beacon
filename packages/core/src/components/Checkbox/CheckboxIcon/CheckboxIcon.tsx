import classNames from "classnames";
import styled from "styled-components";

export interface CheckboxIconProps extends React.SVGAttributes<SVGElement> {}

const getAttrs = ({ className }: CheckboxIconProps) => ({
  className: classNames(className, "bcl-checkbox-icon"),
  viewBox: "0 0 24 24",
});

export const CheckboxIcon = styled.svg.attrs(getAttrs)<CheckboxIconProps>`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;

CheckboxIcon.displayName = "CheckboxIcon";
