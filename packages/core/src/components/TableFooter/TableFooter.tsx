import classNames from "classnames";
import styled from "styled-components";

import { TableFooterProps } from "./types";

const getAttrs = ({ className }: TableFooterProps) => ({
  className: classNames(["bcl-tfoot", className]),
});

export const TableFooter = styled.tfoot.attrs(getAttrs)<TableFooterProps>``;

TableFooter.displayName = "TableFooter";
