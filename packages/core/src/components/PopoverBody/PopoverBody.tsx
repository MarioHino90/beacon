import styled from "styled-components";
import classNames from "classnames";
import { getFontFamily, getFontWeight } from "@braze/beacon-styling";

import { PopoverBodyProps } from "./types";

const getAttrs = ({
  className,
}: PopoverBodyProps): React.HTMLAttributes<HTMLDivElement> => ({
  className: classNames("bcl-popover-body", className),
});

export const PopoverBody = styled.div.attrs(getAttrs)<PopoverBodyProps>`
  font-family: ${getFontFamily("base")};
  font-weight: ${getFontWeight("regular")};
`;
