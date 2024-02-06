import styled from "styled-components";
import { fontSizeSelector } from "@braze/beacon-styling";

import { Button } from "../Button";

import { StyledCollapsibleButtonProps } from "./types";

export const StyledCollapsibleButton = styled(
  Button
)<StyledCollapsibleButtonProps>`
  font-size: ${(props) =>
    props.variant === "quaternary" && fontSizeSelector(props, "body", "sm")};
  padding-right: ${(props) => props.variant === "quaternary" && 0};
  padding-left: ${(props) => props.variant === "quaternary" && 0};
`;
