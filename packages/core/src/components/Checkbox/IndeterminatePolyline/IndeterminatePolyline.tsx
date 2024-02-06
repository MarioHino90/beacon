import classNames from "classnames";
import styled from "styled-components";

import type { IndeterminatePolylineProps } from "./types";

const getAttrs = ({ className }: IndeterminatePolylineProps) => ({
  className: classNames(className, "bcl-indeterminate-polyline"),
  points: "4 12 20 12",
  "aria-hidden": true,
});

export const IndeterminatePolyline = styled.polyline.attrs(
  getAttrs
)<IndeterminatePolylineProps>`
  display: ${(props) => (props.indeterminate ? "visible" : "none")};
`;

IndeterminatePolyline.displayName = "IndeterminatePolyline";
