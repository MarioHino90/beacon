import classNames from "classnames";
import styled from "styled-components";

export interface CheckedPolylineProps
  extends React.SVGAttributes<SVGPolylineElement> {
  /** indicates whether the radio button should be marked as checked */
  checked?: boolean;
  /** indicates that the checkbox is in an indeterminate state, see: https://css-tricks.com/indeterminate-checkboxes/ */
  indeterminate?: boolean;
}

const getAttrs = ({ className }: CheckedPolylineProps) => ({
  className: classNames(className, "bcl-checked-polyline"),
  points: "20 6 9 17 4 12",
});

export const CheckedPolyline = styled.polyline.attrs(
  getAttrs
)<CheckedPolylineProps>`
  display: ${(props) =>
    props.checked && !props.indeterminate ? "visible" : "none"};
`;

CheckedPolyline.displayName = "CheckedPolyline";
