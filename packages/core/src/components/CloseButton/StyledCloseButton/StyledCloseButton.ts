import styled from "styled-components";
import { getColor, getSpacing, spacingSelector } from "@braze/beacon-styling";

export interface StyledCloseButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** sets the size of the button and its 'X' */
  size?: "sm" | "lg";
}

export const StyledCloseButton = styled.button<StyledCloseButtonProps>`
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  text-transform: inherit;
  overflow: visible;
  border: 0;
  margin: 0;
  padding: 0;
  background: transparent;

  &:focus {
    outline: 0;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => (props.size === "sm" ? "11px" : "1.25rem")};
  top: ${getSpacing("sm")};
  right: ${getSpacing("sm")};
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 50%;
  height: ${({ size, ...props }) =>
    size === "sm"
      ? spacingSelector(props, "xl")
      : spacingSelector(props, "xxl")};
  width: ${({ size, ...props }) =>
    size === "sm"
      ? spacingSelector(props, "xl")
      : spacingSelector(props, "xxl")};
  padding: 0;
  color: ${getColor("gray", 400)};

  &:hover:enabled {
    background-color: ${getColor("gray", 100)};
  }

  &:active:enabled,
  &:focus-visible:enabled {
    background-color: rgba(0, 0, 0, 20%);
  }
`;
