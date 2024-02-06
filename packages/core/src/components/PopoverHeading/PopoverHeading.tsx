import classNames from "classnames";
import styled from "styled-components";
import { getColor } from "@braze/beacon-styling";

import { Heading, HeadingProps } from "../Heading";

import { PopoverHeadingProps } from "./types";

const getAttrs = ({ className }: PopoverHeadingProps): HeadingProps => ({
  className: classNames("bcl-popover-heading", className),
  level: 6,
});

export const PopoverHeading = styled(Heading).attrs(
  getAttrs
)<PopoverHeadingProps>`
  color: ${getColor("gray", 800)};
`;
