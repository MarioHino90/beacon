/**
 * @fileoverview the styled tab content container
 */
import classNames from "classnames";
import styled from "styled-components";
import { getSpacing } from "@braze/beacon-styling";

import { StyledTabContentProps } from "./types";

export const StyledTabContent = styled.div.attrs(({ className }) => ({
  className: classNames(className, "bcl-tab-content"),
}))<StyledTabContentProps>`
  margin: ${getSpacing("xl")} 0;
`;
