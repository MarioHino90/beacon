import styled from "styled-components";

export interface HiddenCheckboxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const getAttrs = () => ({
  type: "checkbox",
});

export const HiddenCheckbox = styled.input.attrs(getAttrs)<HiddenCheckboxProps>`
  opacity: 0;
  margin: 0;
  width: 0;
`;

HiddenCheckbox.displayName = "HiddenCheckbox";
