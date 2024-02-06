import styled from "styled-components";

import { Input } from "../Input";

import { StyledTextareaProps } from "./types";

const styledTextarea = styled(Input) as typeof styled.textarea;

const getMinHeight = ({ bclSize, vSize }: StyledTextareaProps) => {
  const combinedSize = vSize ?? (bclSize === "md" ? "xl" : "lg");

  switch (combinedSize) {
    case "lg":
      return "60px";
    case "xl":
      return "120px";
    case "md":
    default:
      return "40px";
  }
};

export const StyledTextarea = styledTextarea<StyledTextareaProps>`
  resize: vertical;
  padding: 9px 12px 5px;
  min-height: ${getMinHeight};
  line-height: normal;

  &:focus:not(:disabled),
  &:active:not(:disabled) {
    padding: 8px 11px 4px;
  }
`;
