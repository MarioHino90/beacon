import classNames from "classnames";
import styled from "styled-components";

import { TableBodyProps } from "./types";

const getAttrs = ({ className }: TableBodyProps) => ({
  className: classNames(["bcl-tbody", className]),
});

export const TableBody = styled.tbody.attrs(getAttrs)<TableBodyProps>``;

TableBody.displayName = "TableBody";
