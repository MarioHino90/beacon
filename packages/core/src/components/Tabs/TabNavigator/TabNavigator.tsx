/**
 * @fileoverview the styled container component for the tab navigational components
 */
import classNames from "classnames";
import styled from "styled-components";

import { TabNavigatorProps } from "../types";

export const TabNavigator = styled.ul.attrs(({ className, ...props }) => ({
  className: classNames(["bcl-tab-navigator", className]),
  ...props,
}))<TabNavigatorProps>`
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
