import classNames from "classnames";
import styled from "styled-components";

import { TableCaptionProps } from "./types";

const getAttrs = ({ className }: TableCaptionProps) => ({
  className: classNames(["bcl-ta-caption", className]),
});

export const TableCaption = styled.caption.attrs(getAttrs)<TableCaptionProps>``;

TableCaption.displayName = "TableCaption";
