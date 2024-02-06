import styled from "styled-components";
import { getSpacing, getBorderWidth, getColor } from "@braze/beacon-styling";

import { StyledFormGroupProps } from "./types";

export const StyledFormGroup = styled.fieldset<StyledFormGroupProps>`
  padding: 0;
  padding-bottom: ${getSpacing("xl")};
  border: none;
  border-bottom: ${getBorderWidth("thin")} solid ${getColor("gray", 300)};
  margin: 0;
  margin-bottom: ${getSpacing("xl")};

  &:last-of-type {
    border: 0;
    margin: 0;
    padding: 0;
  }
`;
